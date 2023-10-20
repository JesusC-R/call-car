import type { Metadata } from "next";
import "./globals.css";

import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Call Car",
  description: "Find the perfect car for the perfect moment.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
