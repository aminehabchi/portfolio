import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  const { t } = useLanguage();

  const education = [
    {
      school: "Zone01 Oujda",
      program: t("education.program"),
      location: t("education.location"),
      start: t("education.start"),
      end: t("education.end"),
      description: t("education.description"),
    },
  ];

  return (
    <section id="education" className="py-16 scroll-mt-10">
      <div>
        <SectionHeader number="05" title={t("education.title")} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col gap-4"
        >
          {education.map((edu) => (
            <div
              key={edu.school}
              className="card-glow p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] hover:border-emerald-500/25 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex p-2.5 rounded-[3px] bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 border border-emerald-500/20 shrink-0">
                  <GraduationCap size={17} className="text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-[var(--heading)]">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-[var(--body-muted)] mt-0.5">{edu.program}</p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)]">
                      <Calendar size={12} className="text-emerald-400" />
                      {edu.start} – {edu.end}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)]">
                      <MapPin size={12} className="text-emerald-400" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-[var(--muted)] text-sm leading-relaxed mt-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
