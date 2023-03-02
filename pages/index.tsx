import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Saad's Portfolio</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* Aboot */}

      <section id="about" className="snap-center">
        <About/>
      </section>

      {/* Education */}

      <section id="education" className="snap-center">
        <Education/>
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact ME */}
    </div>
  );
}
