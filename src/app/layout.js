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
  title: "UBXEXPRESS shipping",
  description:
    "Reliable DHL Shipping Solutions Through UBXEXPRESS Looking for DHL near you? UBXEXPRESS is a trusted logistics provider and shipping partner working with DHL to deliver fast, secure, and reliable domestic and international shipping solutions for businesses and individuals. With over a decade of experience in the logistics industry, UBXEXPRESS combines global reach with local expertise to ensure your shipments move seamlessly — from pickup to final delivery.",
  keywords:
    "DHL Near me, new dhl around me, dhl in my location, partnering with dhl",
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
