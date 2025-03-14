import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { cn } from "@/utils/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, "h-screen")}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
