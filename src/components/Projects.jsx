import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { projects, filterCategories } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

function ProjectModal({ project, onClose, categoryLabel, t }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed z-50 inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-lg bg-[var(--card)] border border-[var(--border-1)] rounded-[3px] overflow-hidden shadow-2xl shadow-emerald-500/[0.07]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              {project.image && (
                <div className="relative h-52 overflow-hidden bg-[var(--card-alt)] border-b border-[var(--border-1)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[10px] font-medium text-emerald-400 uppercase tracking-widest">
                      {categoryLabel(project.category)}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[var(--heading)] mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-[3px] text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--chip-hover)] transition-all duration-200 ml-4 flex-shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-[var(--body-muted)] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] font-medium text-[var(--body-muted)] bg-[var(--chip)] border border-[var(--border-1)] rounded-[3px] px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-[3px] bg-[var(--chip)] border border-[var(--border-1)] text-[var(--body)] hover:text-[var(--heading)] hover:border-emerald-500/30 transition-all duration-200 text-sm font-medium"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:shadow-[0_0_20px_-4px_rgba(52,211,153,0.5)] transition-shadow duration-300 text-sm font-semibold"
                    >
                      <ExternalLink size={14} />
                      {t("projects.liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState("fullstack");
  const [selected, setSelected] = useState(null);

  const categoryLabel = (cat) => t(`projects.categories.${cat}`);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 scroll-mt-10">
      <div>
        <SectionHeader
          number="03"
          title={t("projects.title")}
          subtitle={t("projects.subtitle", projects.length)}
        />

        {/* Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-1.5 rounded-[3px] text-sm font-medium transition-all duration-200 ${
                active === cat.key
                  ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-semibold"
                  : "bg-[var(--chip)] text-[var(--body-muted)] border border-[var(--border-1)] hover:text-[var(--heading)] hover:border-emerald-500/30"
              }`}
            >
              {categoryLabel(cat.key)}
            </button>
          ))}
        </motion.div>

        {/* List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col rounded-[3px] border border-[var(--border-1)] divide-y divide-[var(--border-1)] overflow-hidden"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                onClick={() => setSelected(project)}
                className="group flex items-center gap-4 bg-[var(--card)] hover:bg-[var(--chip)] px-5 py-4 transition-colors duration-200 cursor-pointer"
              >
                {/* Category marker */}
                <span className="hidden sm:block font-mono text-[10px] font-medium text-emerald-400/80 uppercase tracking-widest w-20 shrink-0">
                  {categoryLabel(project.category)}
                </span>

                {/* Title + description */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm font-semibold text-[var(--heading)] leading-snug group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-xs leading-relaxed truncate">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="hidden md:flex flex-wrap gap-1.5 shrink-0 max-w-[220px]">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-medium text-[var(--muted)] bg-[var(--chip)] border border-[var(--border-1)] rounded-[3px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-1 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 rounded-[3px] text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--chip-hover)] transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="p-1.5 rounded-[3px] text-[var(--muted)] hover:text-[var(--heading)] hover:bg-[var(--chip-hover)] transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--faint)] py-12">
            {t("projects.noProjects")}
          </p>
        )}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
        categoryLabel={categoryLabel}
        t={t}
      />
    </section>
  );
}
