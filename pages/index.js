import Head from "next/head";
import Hero from "./components/Hero";
import styles from "../styles/Home.module.css";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raps Solution - IT Solution</title>
        <meta
          name="description"
          content="Raps Solution - IT Solution"
        />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main>
        <Hero />
        <Features />
        <Statistics />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
