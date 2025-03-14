"use client";

import { useCartStore } from "@/store/useCartStore";
import { IGames } from "@/types/game";
import Image from "next/image";

export default function GameCard({ game }: { game: IGames }) {
  const { addToCart, removeFromCart, cart } = useCartStore((state) => state);

  const handleAddToCart = () => {
    isItemInCart ? removeFromCart(game.id) : addToCart(game);
  };

  const isItemInCart = cart.some((item) => item.id === game.id);

  return (
    <div
      key={game.id}
      className="border border-gray-300 rounded-xl p-5 flex gap-5 justify-between flex-col max-w-[380px]"
    >
      <div className="space-y-3">
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

        <p className="uppercase text-gray-600 font-bold text-sm">
          {game.genre}
        </p>

        <div className="flex justify-between">
          <p className="font-bold">{game.name}</p>
          <p className="font-bold">${game.price}</p>
        </div>
      </div>

      <button
        className="border py-4 border-black rounded-lg uppercase text-sm font-bold"
        onClick={handleAddToCart}
      >
        {isItemInCart ? "Remove" : "Add to cart "}
      </button>
    </div>
  );
}
