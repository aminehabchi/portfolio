import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Trophy, Mail, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/aminehabchi",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amine-habchi-1a9aa4237/",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/amine_habchi01/",
    icon: Trophy,
  },
  {
    label: "Email",
    href: "mailto:amine.habchi.01@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Get in touch
          </h2>
          <p className="text-slate-500 text-base mb-10">
            Open to new opportunities — feel free to reach out.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="mailto:amine.habchi.01@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <Mail size={15} />
              amine.habchi.01@gmail.com
            </a>
            <a
              href="https://cv.emage-me.com/me/amine-habchi-R5rIw9qyVmANeH9EkHyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.06] border border-white/[0.1] text-slate-300 text-sm font-medium rounded-full hover:bg-white/[0.1] transition-all duration-200"
            >
              <ExternalLink size={15} />
              Interactive CV
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-3 mb-12">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="p-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-slate-600 text-sm">
            © 2025 Amine Habchi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
