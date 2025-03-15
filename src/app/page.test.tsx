import { render, screen, fireEvent } from "@testing-library/react";
import { useFetchGames } from "@/services/fetchGames";
import "@testing-library/jest-dom";
import Home from "./page";
import { IGames } from "@/types/game";

jest.mock("../components/catalog-header", () => {
  const MockCatalogHeader = () => <div data-testid="catalog-header" />;
  MockCatalogHeader.displayName = "MockCatalogHeader";
  return MockCatalogHeader;
});

jest.mock("../components/game-card", () => {
  const MockGameCard = ({ game }: { game: IGames }) => (
    <div data-testid="game-card">{game.name}</div>
  );
  MockGameCard.displayName = "MockGameCard";
  return MockGameCard;
});

jest.mock("../components/spinner", () => {
  const MockSpinner = () => <div data-testid="spinner" />;
  MockSpinner.displayName = "MockSpinner";
  return MockSpinner;
});

jest.mock("../services/fetchGames", () => ({
  useFetchGames: jest.fn(),
}));

describe("Home Page", () => {
  it("renders loading spinner initially", () => {
    (useFetchGames as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<Home searchParams={{}} />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders 'No games found' if no games exist", () => {
    (useFetchGames as jest.Mock).mockReturnValue({
      data: { pages: [] },
      isLoading: false,
    });

    render(<Home searchParams={{}} />);

    expect(screen.getByText(/no games found/i)).toBeInTheDocument();
  });

  it("renders games when data is available", () => {
    (useFetchGames as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            games: [
              { id: 1, name: "Game One" },
              { id: 2, name: "Game Two" },
            ],
            availableFilters: ["Action", "Adventure"],
          },
        ],
      },
      isLoading: false,
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isFetchingNextPage: false,
    });

    render(<Home searchParams={{}} />);

    expect(screen.getByTestId("catalog-header")).toBeInTheDocument();
    expect(screen.getByText("Game One")).toBeInTheDocument();
    expect(screen.getByText("Game Two")).toBeInTheDocument();
  });

  it("disables 'Load More' button when there are no more pages", () => {
    (useFetchGames as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            games: [{ id: 1, name: "Game One" }],
            availableFilters: [],
          },
        ],
      },
      isLoading: false,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });

    render(<Home searchParams={{}} />);

    expect(
      screen.queryByRole("button", { name: /load more/i })
    ).not.toBeInTheDocument();
  });

  it("calls fetchNextPage when 'Load More' button is clicked", () => {
    const fetchNextPageMock = jest.fn();

    (useFetchGames as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            games: Array.from({ length: 12 }, (_, i) => ({
              id: i + 1,
              name: `Game ${i + 1}`,
            })),
            availableFilters: [],
          },
        ],
      },
      isLoading: false,
      fetchNextPage: fetchNextPageMock,
      hasNextPage: true,
      isFetchingNextPage: false,
    });

    render(<Home searchParams={{}} />);

    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    expect(loadMoreButton).toBeInTheDocument();

    fireEvent.click(loadMoreButton);
    expect(fetchNextPageMock).toHaveBeenCalled();
  });
});
