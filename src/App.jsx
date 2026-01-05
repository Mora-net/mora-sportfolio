import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <BackToTopButton />
    </>
  );
}

// Back to Top Button
const BackToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className="btn back-to-top"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        display: "block",
        background: "#0d6efd",
        color: "#fff",
        borderRadius: "5px",
        padding: "10px 15px",
        border: "none",
        zIndex: 999,
      }}
    >
      <i className="bi bi-arrow-up-square"></i>
    </button>
  );
};

export default App;
