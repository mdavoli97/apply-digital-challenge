import { useCartStore } from "@/store/useCartStore";

export default function OrderSummary() {
  const { cart } = useCartStore();

  return (
    <div className="w-full space-y-7">
      <div className="border p-5 flex flex-col gap-4 h-fit rounded-lg py-7">
        <div className="space-y-2">
          <h2 className="font-bold text-xl">Order Summary</h2>
          <p className="font-normal">{cart.length} items</p>
        </div>

        <div className="space-y-3 mt-10">
          {cart.map((game) => (
            <div key={game.id} className="flex justify-between">
              <p className="max-w-44 sm:max-w-none truncate">{game.name}</p>
              <p>$ {game.price}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-0.5 bg-gray-300" />

        <div className="flex justify-between font-bold">
          <p>Order total</p>
          <p>${cart.reduce((acc, game) => acc + game.price, 0).toFixed(2)}</p>
        </div>
      </div>

      <button className="bg-neutral-700 text-white py-3 rounded-lg mt-5 w-full">
        Checkout
      </button>
    </div>
  );
}
