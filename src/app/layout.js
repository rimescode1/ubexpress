import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.ubxexpress.com"),
  title: {
    default: "UBXEXPRESS - Fast & Reliable DHL Shipping & Logistics Solutions",
    template: "%s | UBXEXPRESS",
  },
  description:
    "UBXEXPRESS is a trusted logistics partner delivering fast, secure, and reliable domestic and international shipping solutions. Partnering with DHL, we offer express delivery, air freight, ocean freight, warehousing, and supply chain management for businesses and individuals.",
  keywords: [
    "DHL near me",
    "DHL shipping",
    "logistics company",
    "express delivery",
    "international shipping",
    "air freight",
    "ocean freight",
    "warehousing",
    "supply chain management",
    "courier services",
    "domestic shipping",
    "UBXEXPRESS",
    "Lagos logistics",
    "Nigeria shipping",
  ],
  authors: [{ name: "UBXEXPRESS" }],
  creator: "UBXEXPRESS",
  publisher: "UBXEXPRESS",
  category: "Logistics & Shipping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ubxexpress.com",
    siteName: "UBXEXPRESS",
    title: "UBXEXPRESS - Fast & Reliable DHL Shipping & Logistics Solutions",
    description:
      "Trusted logistics partner for fast, secure, and reliable domestic and international shipping. Partnering with DHL for express delivery, air freight, ocean freight, and warehousing.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "UBXEXPRESS - Fast & Reliable Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UBXEXPRESS - Fast & Reliable DHL Shipping & Logistics Solutions",
    description:
      "Trusted logistics partner for fast, secure, and reliable domestic and international shipping. Partnering with DHL.",
    images: ["/hero.png"],
    creator: "@ubxexpress",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    android: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}
