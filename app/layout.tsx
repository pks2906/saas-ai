import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider  from "./providers/ConvexClerkProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your Podcast using AI",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ConvexClerkProvider>
         {children}
      </ConvexClerkProvider>
        </body>
    </html>
  );
} 
