import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";

const anurati = LocalFont({
  src: "../public/font/anurati.otf",
  variable: "--font-anurati",
  style: 'normal'
})

const poppins = Poppins({
  variable: "--font-poppins",
  style: 'normal',
  subsets: ['latin'],
  weight: ['100', '200', '300', "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn('antialiased', poppins.variable, anurati.variable)}>{children}</body>
    </html>
  );
}
