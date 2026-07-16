import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 scroll-mt-10">
      <div>
        <SectionHeader
          number="02"
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        {/* Compact list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col rounded-[3px] border border-[var(--border-1)] divide-y divide-[var(--border-1)] overflow-hidden"
        >
          {Object.entries(skillsData).map(([category, skills]) => {
            const isAI = category === "AI & ML";
            const isData = category === "Data Analytics";
            const headerColor = isAI
              ? "text-violet-400"
              : isData
              ? "text-cyan-400"
              : "text-emerald-400";

            return (
              <motion.div
                key={category}
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 bg-[var(--card)] hover:bg-[var(--chip)] px-5 py-4 transition-colors duration-200"
              >
                <h3 className={`font-mono text-[11px] font-medium uppercase tracking-widest w-full sm:w-32 shrink-0 ${headerColor}`}>
                  {t(`skills.categories.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-1.5 text-xs font-medium text-[var(--body-muted)] bg-[var(--chip)] border border-[var(--border-1)] rounded-[3px] px-3 py-1 hover:text-[var(--body-strong)] hover:border-[var(--border-2)] transition-colors duration-200"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-[3px] flex-shrink-0"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
