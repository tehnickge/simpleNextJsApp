import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProviderWithChildren } from "@/components/providers/SessionProviders";
import "./globals.scss";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "watch cute cats and buy candles",
  description: "we like to watch cute cats and smell candles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProviderWithChildren>
        <body className={inter.className}>{children}</body>
        <Footer></Footer>
      </SessionProviderWithChildren>
    </html>
  );
}
