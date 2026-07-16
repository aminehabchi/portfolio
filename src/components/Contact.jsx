import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 lg:pb-24 scroll-mt-10">
      <SectionHeader
        number="06"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        {/* Primary CTA */}
        <div className="flex flex-wrap gap-3 mb-14">
          <a
            href="mailto:amine.habchi.01@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-sm font-semibold rounded-[3px] hover:shadow-[0_0_28px_-4px_rgba(52,211,153,0.5)] transition-shadow duration-300"
          >
            <Mail size={15} />
            amine.habchi.01@gmail.com
          </a>
          <a
            href="https://cv.emage-me.com/me/amine-habchi-R5rIw9qyVmANeH9EkHyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--chip)] border border-[var(--border-1)] text-[var(--body)] text-sm font-medium rounded-[3px] hover:border-emerald-500/30 hover:text-[var(--heading)] transition-all duration-200"
          >
            <ExternalLink size={15} />
            {t("contact.interactiveCV")}
          </a>
        </div>

        <p className="font-mono text-xs text-[var(--faint)]">
          {t("contact.footer")}
        </p>
      </motion.div>
    </footer>
  );
}
