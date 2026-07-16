import React from "react";
import { motion } from "framer-motion";
import {
  Download, Github, Linkedin, Trophy, Mail, MapPin, GraduationCap, Sun, Moon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const socials = [
  { label: "GitHub",   href: "https://github.com/aminehabchi",                        icon: Github   },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amine-habchi-1a9aa4237/",   icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/amine_habchi01/",                icon: Trophy   },
  { label: "Email",    href: "mailto:amine.habchi.01@gmail.com",                      icon: Mail     },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Sidebar({ active }) {
  const { t, lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "about",     label: t("nav.about")     },
    { id: "skills",    label: t("nav.skills")    },
    { id: "projects",  label: t("nav.projects")  },
    { id: "github",    label: t("nav.github")    },
    { id: "education", label: t("nav.education") },
    { id: "contact",   label: t("nav.contact")   },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:min-w-[340px] lg:flex-col lg:justify-between pt-16 pb-4 lg:py-20">
      <div className="lg:min-h-0 lg:overflow-y-auto">
        {/* Avatar */}
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
          className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src="https://github.com/aminehabchi.png"
                alt="Amine Habchi"
                className="w-14 h-14 rounded-[3px] border border-white/10 object-cover"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-[3px] bg-emerald-400 border-[3px] border-[var(--surface)] animate-pulseDot" />
            </div>
            <p className="font-mono text-[11px] text-emerald-400 tracking-widest">
              {t("sidebar.openToOpportunities")}
            </p>
          </div>

          {/* Theme + language toggles */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-[3px] bg-[var(--chip)] border border-[var(--border-1)] text-[var(--body-muted)] hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-2.5 py-2 rounded-[3px] font-mono text-[11px] font-semibold bg-[var(--chip)] border border-[var(--border-1)] text-[var(--body-muted)] hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </motion.div>

        {/* Name + role */}
        <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
          className="font-display text-4xl sm:text-5xl font-bold text-[var(--heading)] tracking-tight mb-3">
          Amine Habchi
        </motion.h1>
        <motion.h2 initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
          className="font-display text-lg font-semibold text-gradient mb-4">
          {t("sidebar.role")}
        </motion.h2>

        {/* Tagline */}
        <motion.p initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
          className="text-[var(--body-muted)] text-sm leading-relaxed max-w-xs mb-6">
          {t("sidebar.tagline")}
        </motion.p>

        {/* Info badges */}
        <motion.div initial="hidden" animate="visible" custom={0.25} variants={fadeUp}
          className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--body-muted)] bg-[var(--chip)] border border-[var(--border-1)] rounded-[3px] px-3 py-1.5">
            <GraduationCap size={12} className="text-emerald-400" /> Zone01 Oujda
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--body-muted)] bg-[var(--chip)] border border-[var(--border-1)] rounded-[3px] px-3 py-1.5">
            <MapPin size={12} className="text-emerald-400" /> {t("sidebar.location")}
          </span>
        </motion.div>

        {/* Nav (desktop only) */}
        <motion.nav initial="hidden" animate="visible" custom={0.35} variants={fadeUp}
          className="hidden lg:block mt-10" aria-label="Section navigation">
          <ul className="space-y-3">
            {navItems.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-gradient-to-r from-emerald-400 to-cyan-400"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-emerald-400"
                          : "text-[var(--muted)] group-hover:text-[var(--body-strong)]"
                      }`}
                    >
                      <span className="mr-1.5 text-[10px] opacity-60">0{i + 1}</span>
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>

      {/* Bottom: CV + socials */}
      <motion.div initial="hidden" animate="visible" custom={0.45} variants={fadeUp}
        className="flex flex-wrap items-center gap-3 mt-10 lg:mt-0">
        <a
          href="/amine-habchi.pdf"
          download="Amine-Habchi.pdf"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-sm font-semibold rounded-[3px] hover:shadow-[0_0_24px_-4px_rgba(52,211,153,0.5)] transition-shadow duration-300"
        >
          <Download size={15} /> {t("sidebar.downloadCV")}
        </a>
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="p-2.5 rounded-[3px] bg-[var(--chip)] border border-[var(--border-1)] text-[var(--body-muted)] hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </motion.div>
    </header>
  );
}
