import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

export const metadata: Metadata = {
  title: "sell any car",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
