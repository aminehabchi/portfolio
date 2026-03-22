import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, filterCategories } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const categoryLabel = (cat) =>
  cat.replace("lowlevel", "Low Level").replace("fullstack", "Full Stack");

export default function Projects() {
  const [active, setActive] = useState("fullstack");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Projects
          </h2>
          <p className="text-slate-500 text-base">
            {projects.length} projects across different domains
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.key
                  ? "bg-white text-slate-900"
                  : "bg-white/[0.05] text-slate-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                className="group flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.13] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-[#111] border-b border-white/[0.06]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/[0.08] uppercase tracking-widest">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                      {categoryLabel(project.category)}
                    </span>
                    <div className="flex gap-1.5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
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
                          className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-500 bg-white/[0.04] border border-white/[0.06] rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-medium text-slate-600 bg-white/[0.04] border border-white/[0.06] rounded px-2 py-0.5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-slate-600 py-12">
            No projects in this category.
          </p>
        )}
      </div>
    </section>
  );
}
