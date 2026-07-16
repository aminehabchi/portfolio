import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SectionHeader({ number, title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-sm text-emerald-400">{number}</span>
        <span className="h-px w-12 bg-gradient-to-r from-emerald-400/60 to-transparent" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--heading)] tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-[var(--muted)] text-base">{subtitle}</p>}
    </motion.div>
  );
}
