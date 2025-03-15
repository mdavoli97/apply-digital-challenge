import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { cn } from "@/utils/utils";
import Footer from "@/components/footer";
import Providers from "./providers";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(archivo.className, "antialiased flex flex-col")}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
