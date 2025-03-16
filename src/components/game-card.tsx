"use client";

import { useCartStore } from "@/store/useCartStore";
import { IGames } from "@/types/game";
import { cn } from "@/utils/utils";
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
      className="border border-gray-300 rounded-2xl p-6 flex gap-5 justify-between flex-col max-w-[23.75rem]"
    >
      <div className="space-y-3">
        <div className="relative">
          {game.isNew && (
            <span className="absolute top-3 left-3 px-3 p-1.5 rounded-md bg-gray-100">
              New
            </span>
          )}
          <Image
            src={game.image}
            alt={game.name}
            width={300}
            height={300}
            className="w-96 h-60 rounded-t-2xl"
          />
        </div>

        <p className="uppercase text-gray-500 font-bold text-base">
          {game.genre}
        </p>

        <div className="flex justify-between">
          <p className="font-bold text-lg">{game.name}</p>
          <p className="font-bold text-lg">${game.price}</p>
        </div>
      </div>

      <button
        className={cn(
          "border py-4 border-black rounded-lg uppercase text-sm font-bold",
          {
            "bg-gray-100": isItemInCart,
          }
        )}
        onClick={handleAddToCart}
      >
        {isItemInCart ? "Remove" : "Add to cart "}
      </button>
    </div>
  );
}
