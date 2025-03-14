import { IGames } from "@/types/game";
import Image from "next/image";

export default function GameCard({ game }: { game: IGames }) {
  return (
    <div key={game.id} className="border rounded-xl p-5 flex gap-5 flex-col">
      <div className="relative">
        {game.isNew && (
          <span className="absolute top-2 left-2 px-2 p-1 rounded-md text-sm bg-gray-100">
            New
          </span>
        )}
        <Image
          src={game.image}
          alt={game.name}
          width={300}
          height={300}
          className="w-96 h-[240px] rounded-t-xl"
        />
      </div>

      <p>{game.genre}</p>

      <div className="flex justify-between">
        <p>{game.name}</p>
        <p>{game.price}</p>
      </div>
    </div>
  );
}
