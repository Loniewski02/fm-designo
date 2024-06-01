import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const fontJost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "block",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Designo | Custom Designs",
  description: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontJost.variable} font-jost min-h-[100dvh]`}>
        {children}
      </body>
    </html>
  );
}
