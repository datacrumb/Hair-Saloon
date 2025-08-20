import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elegance Hair Salon - Professional Hair Care Services",
  description: "Professional hair salon offering cutting, coloring, styling, and treatments. Book your appointment online or visit us for walk-in services.",
  keywords: "hair salon, hair cutting, hair coloring, hair styling, beauty salon, appointment booking",
  authors: [{ name: "Elegance Hair Salon" }],
  creator: "Elegance Hair Salon",
  openGraph: {
    title: "Elegance Hair Salon - Professional Hair Care Services",
    description: "Professional hair salon offering cutting, coloring, styling, and treatments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegance Hair Salon - Professional Hair Care Services",
    description: "Professional hair salon offering cutting, coloring, styling, and treatments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" />
        </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
