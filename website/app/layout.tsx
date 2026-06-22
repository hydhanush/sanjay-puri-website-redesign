import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Sanjay Puri Architects",
  description: "Architecture that responds to place, culture, and climate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-primary">
        {children}
        <Footer />
      </body>
    </html>
  );
}
