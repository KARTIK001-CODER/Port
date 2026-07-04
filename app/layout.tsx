import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kartik Choudhary — Developer, Builder, Creator",
  description: "Award-winning developer portfolio of Kartik Choudhary. Full-stack engineer, AI developer, and modern product builder crafting premium digital experiences.",
  keywords: ["developer", "portfolio", "full-stack", "AI", "startup", "react", "next.js"],
  authors: [{ name: "Kartik Choudhary" }],
  openGraph: {
    title: "Kartik Choudhary — Developer, Builder, Creator",
    description: "Crafting premium digital experiences with code and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased relative`} style={{ backgroundColor: '#FBF6E9' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
