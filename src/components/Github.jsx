import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, GitFork } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const USERNAME = "aminehabchi";

// Update this list to match your actual pinned repositories on GitHub
const PINNED = [
  "social-network",
  "Echo_Script",
  "CollaboBoard",
  "0-shell",
  "bomberman-dom",
  "mini-framework",
];

const LANG_COLORS = {
  JavaScript: "#fbbf24",
  TypeScript: "#3b82f6",
  Rust:       "#f97316",
  Go:         "#06b6d4",
  Java:       "#ef4444",
  Python:     "#a3e635",
  HTML:       "#fb923c",
  CSS:        "#db2777",
  Shell:      "#4ade80",
  Dockerfile: "#0ea5e9",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

export default function GithubActivity() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [profile, setProfile] = useState(null);
  const [repos,   setRepos]   = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`).then((r) => r.json()),
    ])
      .then(([prof, repoList]) => {
        setProfile(prof);
        setRepos(Array.isArray(repoList) ? repoList : []);
      })
      .finally(() => setLoading(false));
  }, []);

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);

  const langMap = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const totalLangRepos = Object.values(langMap).reduce((a, b) => a + b, 0);
  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const stats = profile
    ? [
        { icon: BookOpen, value: profile.public_repos, label: t("github.repositories") },
        { icon: Star,     value: totalStars,            label: t("github.totalStars")  },
        { icon: GitFork,  value: totalForks,            label: t("github.totalForks")  },
        { icon: Users,    value: profile.followers,     label: t("github.followers")   },
      ]
    : [];

  const statsCardParams = theme === "dark"
    ? "theme=dark&bg_color=0b0e0d&title_color=34d399&icon_color=34d399&text_color=cbd5e1"
    : "theme=default&bg_color=f8fafc&title_color=059669&icon_color=059669&text_color=334155";

  return (
    <section id="github" className="py-16 scroll-mt-10">
      <div>
        <SectionHeader
          number="04"
          title={t("github.title")}
          subtitle={`@${USERNAME}`}
        />

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-6 h-6 rounded-[3px] border-2 border-emerald-400 border-t-transparent animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Left: stats + languages */}
            <div className="flex flex-col gap-4">

              {/* Stats grid */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={0.1} variants={fadeUp}
                className="grid grid-cols-2 gap-3"
              >
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="card-glow flex flex-col gap-1 p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] hover:border-emerald-500/25 transition-all duration-300"
                  >
                    <Icon size={15} className="text-emerald-400 mb-1" />
                    <span className="font-display text-2xl font-bold text-[var(--heading)]">{value}</span>
                    <span className="text-xs text-[var(--muted)]">{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Top languages */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={0.2} variants={fadeUp}
                className="card-glow p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] flex-1 transition-all duration-300"
              >
                <p className="font-mono text-[11px] font-medium text-[var(--body-muted)] uppercase tracking-widest mb-4">
                  {t("github.topLanguages")}
                </p>

                {/* Bar */}
                <div className="flex h-2 rounded-[3px] overflow-hidden mb-5 gap-px">
                  {topLangs.map(([lang, count]) => (
                    <div
                      key={lang}
                      style={{
                        width: `${(count / totalLangRepos) * 100}%`,
                        backgroundColor: LANG_COLORS[lang] ?? "#64748b",
                      }}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-2.5">
                  {topLangs.map(([lang, count]) => (
                    <div key={lang} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-[3px] shrink-0"
                          style={{ backgroundColor: LANG_COLORS[lang] ?? "#64748b" }}
                        />
                        <span className="text-sm text-[var(--body)]">{lang}</span>
                      </div>
                      <span className="font-mono text-xs text-[var(--muted)]">
                        {Math.round((count / totalLangRepos) * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: contribution graph + top repos */}
            <div className="flex flex-col gap-4">

              {/* Contribution graph */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={0.15} variants={fadeUp}
                className="card-glow p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] transition-all duration-300"
              >
                <p className="font-mono text-[11px] font-medium text-[var(--body-muted)] uppercase tracking-widest mb-4">
                  {t("github.contributionGraph")}
                </p>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&hide_border=true&${statsCardParams}&show_icons=true&include_all_commits=true&count_private=true`}
                  alt="GitHub stats"
                  className="w-full rounded-[3px]"
                />
              </motion.div>

              {/* Top repos */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={0.25} variants={fadeUp}
                className="card-glow p-5 rounded-[3px] bg-[var(--card)] border border-[var(--border-1)] flex-1 transition-all duration-300"
              >
                <p className="font-mono text-[11px] font-medium text-[var(--body-muted)] uppercase tracking-widest mb-4">
                  {t("github.pinnedRepositories")}
                </p>
                <div className="flex flex-col gap-3">
                  {PINNED
                    .map((name) => repos.find((r) => r.name === name))
                    .filter(Boolean)
                    .map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-[3px] bg-[var(--chip)] border border-[var(--border-1)] hover:border-emerald-500/30 hover:bg-[var(--chip)] transition-all duration-200 group"
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-sm font-medium text-[var(--body-strong)] group-hover:text-emerald-400 transition-colors truncate">
                            {repo.name}
                          </p>
                          {repo.language && (
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span
                                className="w-2 h-2 rounded-[3px]"
                                style={{ backgroundColor: LANG_COLORS[repo.language] ?? "#64748b" }}
                              />
                              <span className="text-xs text-[var(--muted)]">{repo.language}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 font-mono text-xs text-[var(--muted)] shrink-0 ml-3">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </div>
                      </a>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
