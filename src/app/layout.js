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
  title: "UBXEXPRESS",
  description: "Your Number 1 Express Shipping Service",
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
