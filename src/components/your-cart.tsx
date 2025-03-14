import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import React from "react";

export default function YourCart() {
  const { removeFromCart, cart } = useCartStore((state) => state);

  return (
    <div className="flex flex-col divide-y-2 w-full">
      {cart.map((game) => (
        <div
          key={game.id}
          className="bp-5 flex flex-col sm:flex-row gap-5 py-5 px-3"
        >
          <div className="relative flex gap-5">
            {game.isNew && (
              <span className="absolute top-2 left-2 px-2 p-1 rounded-md text-sm bg-gray-100">
                New
              </span>
            )}
            <Image
              src={game.image}
              alt={game.name}
              width={256}
              height={156}
              className="min-w-64 h-[156px] w-full"
              priority
            />
            <Image
              onClick={() => removeFromCart(game.id)}
              src="/close-icon.svg"
              alt="Remove from cart"
              width={200}
              height={50}
              className="size-3 cursor-pointer flex sm:hidden"
            />
          </div>

          <div className="flex flex-col w-full justify-between md:min-w-[350px]">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-gray-600 font-bold text-sm">
                {game.genre}
              </p>
              <p className="font-bold text-lg">{game.name}</p>
              <p className="text-sm">{game.description}</p>
            </div>

            <p className="self-end font-bold text-lg">${game.price}</p>
          </div>

          <Image
            onClick={() => removeFromCart(game.id)}
            src="/close-icon.svg"
            alt="Remove from cart"
            width={200}
            height={50}
            className="size-3 cursor-pointer hidden sm:flex"
          />
        </div>
      ))}
    </div>
  );
}
