import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>UBXEXPRESS - Fast & Reliable Logistics Solutions</title>
        <meta
          name="description"
          content="Your trusted partner for worldwide shipping, warehousing, and supply chain management. We deliver excellence across the globe with speed and precision."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Stats />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
