import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navigation from "./components/UI/Navigation";
import Footer from "./components/layout/Footer";

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
      <body className={`${fontJost.variable} min-h-[100dvh] font-jost`}>
        <main className="overflow-x-hiddenen">
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
