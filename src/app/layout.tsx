import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from 'clsx';
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito', 
  display: 'swap',
});

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  variable: '--font-nunito-sans', 
  display: 'swap',
});

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
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>{children}</body>
    </html>
  );
}
