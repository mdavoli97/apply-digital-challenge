import GameCard from "@/components/game-card";
import { fetchGames } from "@/services/fetchGames";

export default async function Home() {
  const allGames = await fetchGames();

  return (
    <main className="container mx-auto flex flex-col min-h-screen">
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 gap-12 my-12">
        {allGames.games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
