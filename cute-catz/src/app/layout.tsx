import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProviderWithChildren } from "@/components/providers/SessionProviders";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.scss";
import Menu from "@/components/Menu/Menu";

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
      <body className={inter.className}>
        <SessionProviderWithChildren>
          <Header></Header>
          {children}
          <Footer></Footer>
        </SessionProviderWithChildren>
      </body>
    </html>
  );
}
