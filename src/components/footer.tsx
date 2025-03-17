import { ROUTES } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-700 h-[10.625rem] flex items-center justify-center">
      <Link href={ROUTES.home}>
        <Image
          src="/apply-digital-logo.svg"
          alt="Apply Digital"
          width={200}
          height={50}
        />
      </Link>
    </footer>
  );
}
