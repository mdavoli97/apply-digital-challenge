import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#EEEEEE] h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <Image
            src="/gamer-shop-logo.svg"
            alt="Apply Digital"
            width={200}
            height={50}
            className="w-[150px] h-6"
          />
        </Link>

        <Link href="/shopping-cart">
          <Image src="/cart-icon.svg" alt="Cart Icon" width={20} height={20} />
        </Link>
      </div>
    </header>
  );
}
