import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin-ext'],
})

const poppins = Poppins({
  variable: "--font-poppins",
  style: 'normal',
  subsets: ['latin'],
  weight: ['100', '200', '300', "400", "500", "600", "700", "800", "900"],
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
    <html lang="en">
      <body className={cn('antialiased bg-dark text-white cursor-none', poppins.variable, inter.variable)}>{children}</body>
    </html>
  );
}
