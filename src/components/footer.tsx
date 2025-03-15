import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-700 h-[170px] flex items-center justify-center">
      <Link href="/">
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
