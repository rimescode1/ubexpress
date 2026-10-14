import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Tracking from "@/components/Tracking";

export const metadata = {
  title: "UBXEXPRESS - Fast & Reliable DHL Shipping & Logistics Solutions",
  description:
    "Your trusted partner for worldwide shipping, warehousing, and supply chain management. We deliver excellence across the globe with speed and precision.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UBXEXPRESS",
  url: "https://www.ubxexpress.com",
  logo: "https://www.ubxexpress.com/logo.png",
  image: "https://www.ubxexpress.com/hero.png",
  description:
    "UBXEXPRESS is a trusted logistics provider and shipping partner working with DHL to deliver fast, secure, and reliable domestic and international shipping solutions.",
  email: "ubxexpress@outlook.com",
  telephone: "+234-906-3359-303",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Road 5, Suite K50, Ikota Shopping Complex, Lekki-Ajah",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.facebook.com/share/1ZHkeHSoUN/",
    "https://www.instagram.com/ubxexpress",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-906-3359-303",
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Tracking />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
