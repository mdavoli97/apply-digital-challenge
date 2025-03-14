import { IGames } from "@/types/game";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ICartStore = {
  cart: IGames[];
  addToCart: (item: IGames) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);
