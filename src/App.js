import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubActivity from "./components/Github";
import Education from "./components/Education";
import Contact from "./components/Contact";

export { projects, filterCategories, skillsData } from "./data/portfolio";

const SECTION_IDS = ["about", "skills", "projects", "github", "education", "contact"];

function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-2)] to-transparent" />
  );
}

export default function App() {
  const [active, setActive] = useState("about");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll spy for the sidebar nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[var(--surface)] text-[var(--body-strong)] min-h-screen overflow-x-clip">
      {/* Dot-grid backdrop */}
      <div className="fixed inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] pointer-events-none" />

      {/* Ambient glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/[0.06] rounded-[3px] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-[3px] blur-[120px]" />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20 lg:flex lg:gap-14">
        <Sidebar active={active} />

        <main className="lg:w-[58%] lg:flex-1">
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Projects />
          <Divider />
          <GithubActivity />
          <Divider />
          <Education />
          <Divider />
          <Contact />
        </main>
      </div>
    </div>
  );
}
