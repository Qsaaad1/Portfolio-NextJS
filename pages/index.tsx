import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80">
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
        <About />
      </section>

      {/* Education */}

      <section id="education" className="snap-center">
        <Education />
      </section>

      {/* Skills */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer grayscale hover:grayscale-0">
          <div className="flex items-center justify-end px-10 ">
            <img className="h-10 w-10 rounded-full filter  "
             src="https://user-images.githubusercontent.com/101616957/223223780-6bb0c2b7-a94d-400f-b393-78dda1731468.jpeg" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
