import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubActivity from "./components/Github";
import Contact from "./components/Contact";

export { projects, filterCategories, skillsData } from "./data/portfolio";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#0a0a0a] text-slate-200 min-h-screen">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.05]" />
      </div>

      <Skills />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.05]" />
      </div>

      <Projects />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.05]" />
      </div>

      <GithubActivity />
      <Contact />
    </div>
  );
}
