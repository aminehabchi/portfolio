import React from "react";
import { motion } from "framer-motion";
import {
  Download, Github, Linkedin, Trophy, Mail, MapPin,
  GraduationCap, Cpu, Zap, Code2, Globe, Server,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const stats = [
  { value: "17+", label: "Projects built" },
  { value: "10+", label: "Technologies" },
  { value: "2+", label: "Years coding" },
];

const focusAreas = [
  { icon: Globe,   label: "Full Stack Web",      desc: "Next.js, Angular, Go, Spring-boot" },
  { icon: Cpu,     label: "AI & Machine Learning",  desc: "LLMs, RAG, Claude API" },
  { icon: Zap,     label: "Real-Time Features",   desc: "WebSockets, Kafka, event-driven" },
];

const topTech = ["Go", "Rust", "Java", "Next.js", "Docker", "PostgreSQL", "Node.js"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-12"
    >
      {/* Gradient blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-950/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Avatar + name */}
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="flex items-center gap-4 mb-6">
            <img
              src="https://github.com/aminehabchi.png"
              alt="Amine Habchi"
              className="w-16 h-16 rounded-full border border-white/10 object-cover shrink-0"
            />
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Portfolio</p>
              <h1 className="text-2xl font-bold text-white">Amine Habchi</h1>
            </div>
          </motion.div>

          {/* Role */}
          <motion.p initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Full Stack<br />
            <span className="text-emerald-400">Developer</span>
          </motion.p>

          {/* Bio */}
          <motion.p initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
            className="text-slate-400 text-base leading-relaxed mb-6 max-w-md">
            I build full-stack web applications and low-level systems from
            interactive frontends with React and Angular to backend services with
            Go, Java, and Rust. I care about clean code, performance, and
            real-time features.
          </motion.p>

          {/* Info badges */}
          <motion.div initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            className="flex flex-wrap gap-2 mb-8">
            <span className="flex items-center gap-1.5 text-sm text-slate-400 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1.5">
              <GraduationCap size={13} className="text-emerald-400" /> Zone01 Oujda
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-400 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1.5">
              <MapPin size={13} className="text-emerald-400" /> Casablanca, Morocco
            </span>
          </motion.div>

          {/* Actions */}
          <motion.div initial="hidden" animate="visible" custom={0.4} variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="/amine-habchi.pdf"
              download="Amine-Habchi.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <Download size={15} /> Download CV
            </a>
            <a href="https://github.com/aminehabchi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="p-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all duration-200">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/amine-habchi-1a9aa4237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all duration-200">
              <Linkedin size={17} />
            </a>
            <a href="https://leetcode.com/u/amine_habchi01/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"
              className="p-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all duration-200">
              <Trophy size={17} />
            </a>
            <a href="mailto:amine.habchi.01@gmail.com" aria-label="Email"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all duration-200 text-sm">
              <Mail size={15} />
              <span className="hidden sm:inline">amine.habchi.01@gmail.com</span>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}
            className="grid grid-cols-3 gap-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className="text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-4">

          {/* Focus area cards */}
          {focusAreas.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial="hidden"
              animate="visible"
              custom={0.3 + i * 0.1}
              variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                <Icon size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">{label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Tech stack */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.65}
            variants={fadeUp}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={14} className="text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Tech Stack</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {topTech.map((tech) => (
                <span key={tech} className="text-xs text-slate-300 bg-white/[0.06] border border-white/[0.08] rounded-md px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Currently section */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.75}
            variants={fadeUp}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Server size={14} className="text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Currently</p>
            </div>
            <ul className="space-y-2">
              {[
                "Deepening backend architecture skills",
                "Building with Rust for systems-level projects",
                "Exploring cloud-native and DevOps tooling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <div className="w-px h-8 bg-white" />
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
    </section>
  );
}
