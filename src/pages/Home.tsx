import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}