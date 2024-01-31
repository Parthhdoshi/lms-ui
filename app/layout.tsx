"use client";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "./utils/ThemeProviders";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins"
});

const josefin = Josefin_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900 dark:to-black duration-300 `} >
        <ThemeProviders>
          {children}
       </ThemeProviders>
      </body>
    </html>
  );
}
