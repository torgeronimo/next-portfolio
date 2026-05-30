import type { Metadata } from "next";
import { DM_Sans, DM_Mono, DM_Serif_Display} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer"
import Navbar from "./components/navbar";
import Preloader from "./components/ui/Preloader";
import ScrollProgress from "./components/ui/scrollprogress";
import { Scroll } from "lucide-react";

const dmSans = DM_Sans({
  weight: ['300','400', '500'], // DM Sans requires explicit weights
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  weight: ['300','400', '500'], // DM Mono requires explicit weights
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
});
export const metadata: Metadata = {
  title: "Victor Geronimo",
  description: "Web developer specializing in Next.js, React, TypeScript, and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      
      <body>
        <header className="sticky top-0 z-50">
          <ScrollProgress/>
          <Navbar/>
        </header>
        <main>
          <Preloader/>
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
