"use client";
import React, { useRef, useEffect } from "react";
import { skillsData } from "../info/info.js";

const SkillsSection = () => {
    const containerRef = useRef(null);
    const bubblesRef = useRef({});

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Responsive size factor: smaller on small screens
        const sizeFactor = containerWidth < 768 ? 0.6 : 1;

        const newBubbles = {};
        ["frontend", "backend", "database", "tools"].forEach((category) => {
            newBubbles[category] = skillsData[category].map((skill) => {
                const size = Math.max(40, skill.level * 1.2 * sizeFactor); // apply sizeFactor
                const x = Math.random() * (containerWidth - size) + size / 2;
                const y = Math.random() * (containerHeight - size) + size / 2;
                const dx = (Math.random() - 0.5) * 1.5;
                const dy = (Math.random() - 0.5) * 1.5;
                return { x, y, dx, dy, size, skill, category };
            });
        });

        bubblesRef.current = newBubbles;

        const animate = () => {
            Object.keys(bubblesRef.current).forEach((category) => {
                bubblesRef.current[category].forEach((bubble) => {
                    bubble.x += bubble.dx;
                    bubble.y += bubble.dy;

                    if (bubble.x < bubble.size / 2 || bubble.x > containerWidth - bubble.size / 2) bubble.dx *= -1;
                    if (bubble.y < bubble.size / 2 || bubble.y > containerHeight - bubble.size / 2) bubble.dy *= -1;

                    bubble.x = Math.min(Math.max(bubble.x, bubble.size / 2), containerWidth - bubble.size / 2);
                    bubble.y = Math.min(Math.max(bubble.y, bubble.size / 2), containerHeight - bubble.size / 2);

                    const el = document.getElementById(`${category}-${bubble.skill.name}`);
                    if (el) el.style.transform = `translate(${bubble.x - bubble.size / 2}px, ${bubble.y - bubble.size / 2}px)`;
                });
            });
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        // Update bubble sizes on window resize
        const handleResize = () => {
            const newWidth = container.offsetWidth;
            const newHeight = container.offsetHeight;
            const factor = newWidth < 768 ? 0.6 : 1;

            Object.keys(bubblesRef.current).forEach((category) => {
                bubblesRef.current[category].forEach((bubble) => {
                    bubble.size = Math.max(40, bubble.skill.level * 1.2 * factor);
                });
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gradientMap = {
        frontend: "from-blue-500 to-blue-600",
        backend: "from-green-500 to-green-600",
        database: "from-orange-500 to-orange-600",
        tools: "from-purple-500 to-purple-600",
    };

    return (
        <section className="py-20 px-6 bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Technical Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {Object.entries({
                        frontend: "bg-blue-500",
                        backend: "bg-green-500",
                        database: "bg-orange-500",
                        tools: "bg-purple-500",
                    }).map(([cat, color]) => (
                        <div className="flex items-center gap-2" key={cat}>
                            <div className={`w-4 h-4 rounded-full ${color}`}></div>
                            <span className="text-sm text-gray-300">
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </span>
                        </div>
                    ))}
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full h-96 md:h-[500px] bg-gray-800/30 rounded-2xl border border-gray-700 overflow-hidden"
                >
                    {["frontend", "backend", "database", "tools"].map((category) =>
                        skillsData[category].map((bubble) => (
                            <div
                                key={`${category}-${bubble.name}`}
                                id={`${category}-${bubble.name}`}
                                className="absolute group cursor-pointer transform transition-all duration-300 hover:scale-110"
                                style={{
                                    width: `${Math.max(40, bubble.level * 1.2)}px`,
                                    height: `${Math.max(40, bubble.level * 1.2)}px`,
                                    top: 0,
                                    left: 0,
                                    transform: `translate(0px, 0px)`,
                                }}
                            >
                                <div
                                    className={`w-full h-full rounded-full bg-gradient-to-br ${gradientMap[category]} flex items-center justify-center shadow-lg hover:shadow-opacity-50 transition-all duration-300`}
                                >
                                    <span className="text-white font-semibold text-xs text-center leading-tight">
                                        {bubble.name}
                                    </span>
                                </div>
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {bubble.level}%
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Hover over the bubbles to see skill levels. Bubble size represents proficiency.
                </p>
            </div>
        </section>
    );
};

export default SkillsSection;
