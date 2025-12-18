import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <div className="shell">
          <section className="hero" id="about">
            <Hero />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
      <footer>{/* Footer HTML */}</footer>
    </div>
  );
}
