import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";
import { useCartStore } from "@/store/useCartStore";

jest.mock("../../store/useCartStore", () => ({
  useCartStore: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("../../components/order-summary", () => ({
  __esModule: true,
  default: () => <div data-testid="order-summary" />,
}));

jest.mock("../../components/your-cart", () => ({
  __esModule: true,
  default: () => <div data-testid="your-cart" />,
}));

describe("Cart Page", () => {
  it("renders correctly when cart is empty", () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({ cart: [] });

    render(<Page />);

    expect(
      screen.getByRole("link", { name: /Back to Catalog/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByTestId("order-summary")).toBeInTheDocument();
    expect(screen.getByTestId("your-cart")).toBeInTheDocument();
  });

  it("renders correct item count when cart has items", () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      cart: [{ id: 1 }, { id: 2 }],
    });

    render(<Page />);

    expect(screen.getByText(/2 items/i)).toBeInTheDocument();
  });
});
