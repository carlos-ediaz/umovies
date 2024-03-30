import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import NavigationBar from "./components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMovies",
  description: "Easily find and save your favorites movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
