import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ebru Sakar — SEO, Paid Search & Digital Marketing Analytics",
  description: "Portfolio of Ebru Sakar — MSc Digital Marketing & Analytics student specializing in SEO, Google Ads, and analytics. Based in Barcelona, available for internship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
