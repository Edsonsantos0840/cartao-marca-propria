import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartão Marca Própria Brasilcard",
  description: "O Cartão Sem Complicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
         <Navbar/>
        {children}
        
        </body>
    </html>
  );
}
