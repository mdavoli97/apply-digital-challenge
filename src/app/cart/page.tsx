"use client";

import OrderSummary from "@/components/order-summary";
import YourCart from "@/components/your-cart";
import { ROUTES } from "@/config/routes";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { cart } = useCartStore();

  return (
    <section className="flex flex-col max-w-7xl mx-auto gap-10 p-5 md:py-10 w-full min-h-screen">
      <Link href={ROUTES.home} className="flex items-center gap-3">
        <Image
          src="/arrow-left-icon.svg"
          alt="Apply Digital"
          width={200}
          height={50}
          className="size-3"
        />
        Back to Catalog
      </Link>
      <div className="flex flex-col gap-2 md:gap-5">
        <h1 className="font-bold text-2xl xl:text-4xl">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg xl:text-xl font-normal">Your cart is empty</p>
        ) : (
          <p className="text-lg xl:text-xl font-normal">{cart.length} items</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <YourCart />
        <OrderSummary />
      </div>
    </section>
  );
}
