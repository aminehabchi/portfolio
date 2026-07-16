import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Globe, Server } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "17+", label: t("about.statsProjects") },
    { value: "10+", label: t("about.statsTech") },
    { value: "2+", label: t("about.statsYears") },
  ];

  const focusAreas = [
    { icon: Globe, label: t("about.focusFullStackLabel"), desc: t("about.focusFullStackDesc") },
    { icon: Cpu, label: t("about.focusAiLabel"), desc: t("about.focusAiDesc") },
    { icon: Zap, label: t("about.focusRealtimeLabel"), desc: t("about.focusRealtimeDesc") },
  ];

  const currentlyItems = [
    t("about.currently1"),
    t("about.currently2"),
    t("about.currently3"),
  ];

  return (
    <section id="about" className="pt-16 lg:pt-20 pb-16 scroll-mt-10">
      <SectionHeader number="01" title={t("about.title")} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {/* Bio */}
        <motion.p variants={fadeUp} className="text-[var(--body-muted)] text-base leading-relaxed mb-4">
          {t("about.bio1")}
        </motion.p>
        <motion.p variants={fadeUp} className="text-[var(--body-muted)] text-base leading-relaxed mb-10">
          {t("about.bio2")}
        </motion.p>

        {/* Focus areas */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {focusAreas.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="card-glow p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] hover:border-emerald-500/25 transition-all duration-300"
            >
              <div className="inline-flex p-2.5 rounded-[3px] bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 border border-emerald-500/20 mb-3">
                <Icon size={17} className="text-emerald-400" />
              </div>
              <p className="font-display text-sm font-semibold text-[var(--heading)] mb-1">{label}</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Currently */}
        <motion.div variants={fadeUp}
          className="card-glow p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] mb-8 transition-all duration-300">
          <div className="flex items-center gap-2 mb-3">
            <Server size={14} className="text-emerald-400" />
            <p className="font-mono text-[11px] font-medium text-[var(--body-muted)] uppercase tracking-widest">{t("about.currently")}</p>
          </div>
          <ul className="space-y-2">
            {currentlyItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-[var(--body-muted)]">
                <span className="mt-1.5 w-1 h-1 rounded-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="card-glow flex flex-col gap-0.5 p-4 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] transition-all duration-300">
              <span className="font-display text-2xl font-bold text-gradient">{value}</span>
              <span className="text-xs text-[var(--muted)]">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
