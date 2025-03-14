import CatalogHeader from "@/components/catalog-header";
import GameCard from "@/components/game-card";
import SeeMoreButton from "@/components/see-more-button";
import { fetchGames } from "@/services/fetchGames";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedGenre = (searchParams?.genre || "") as string;
  const selectedPage = (searchParams?.page || 1) as number;

  const gamesData = await fetchGames(selectedGenre, selectedPage);

  return (
    <main className="container mx-auto flex flex-col p-3 md:p-0">
      <CatalogHeader filters={gamesData.availableFilters} />
      {gamesData.games.length === 0 ? (
        <div className="flex justify-center">
          <p>No games found</p>
        </div>
      ) : (
        <div className="my-6 md:my-12 max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {gamesData.games?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {gamesData.games.length >= 12 &&
            gamesData.currentPage < gamesData.totalPages && (
              <SeeMoreButton
                currentPage={gamesData.currentPage}
                totalPages={gamesData.totalPages}
              />
            )}
        </div>
      )}
    </main>
  );
}
