import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
