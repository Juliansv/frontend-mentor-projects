import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/side-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My projects",
  description: "Frontend mentor completed projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "flex min-h-screen"}>
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
