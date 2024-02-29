import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobilio",
  description: "Mobilio - Muebles a tu medida",
  openGraph: {
    title: 'Mobilio',
    description: 'Mobilio - Muebles a tu medida',
    images: ['/images/logo.jpg'],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const toggleHamburger = false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
