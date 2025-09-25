import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hud203.com'),
  title: {
    default: "Creative Real Estate Financing Community | HUD203",
    template: "%s | HUD203"
  },
  description: "Join HUD203's community of real estate professionals mastering creative financing. Learn subject-to deals, seller financing, and win-win strategies that work in any market.",
  keywords: [
    "creative real estate financing",
    "subject to real estate deals",
    "seller financing properties",
    "wrap around mortgage",
    "assumable mortgages",
    "owner financing real estate",
    "real estate investor community"
  ],
  authors: [{ name: "HUD203 Team" }],
  creator: "HUD203",
  publisher: "HUD203",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hud203.com",
    siteName: "HUD203",
    title: "Creative Real Estate Financing Community | HUD203",
    description: "Join HUD203's community of real estate professionals mastering creative financing. Learn subject-to deals, seller financing, and win-win strategies that work in any market.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HUD203 - Creative Real Estate Financing Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Real Estate Financing Community | HUD203",
    description: "Join HUD203's community of real estate professionals mastering creative financing. Learn subject-to deals, seller financing, and win-win strategies that work in any market.",
    images: ["/og-image.jpg"],
    creator: "@hud203",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
