"use client";
import React, { useRef, useEffect } from "react";

export const skillsData = {
    frontend: [
        { name: "React", level: 95, color: "#3b82f6" },
        { name: "JavaScript", level: 90, color: "#eab308" },
        { name: "TypeScript", level: 85, color: "#2563eb" },
        { name: "HTML/CSS", level: 90, color: "#f97316" },
        { name: "Tailwind", level: 85, color: "#06b6d4" },
        { name: "Next.js", level: 80, color: "#374151" },
        { name: "Angular", level: 80, color: "#dc2626" },
    ],
    backend: [
        { name: "Node.js", level: 85, color: "#22c55e" },
        { name: "WebSocket", level: 80, color: "#2563eb" },
        { name: "GraphQL", level: 70, color: "#ec4899" },
        { name: "Spring-boot", level: 70, color: "#22c55e" },
        { name: "REST APIs", level: 90, color: "#a855f7" },
        { name: "Golang", level: 80, color: "#06b6d4" },
    ],
    database: [
        { name: "PostgreSQL", level: 60, color: "#1d4ed8" },
        { name: "SqLite", level: 80, color: "#16a34a" },
    ],
    tools: [
        { name: "VS Code", level: 95, color: "#2563eb" },
        { name: "Git", level: 70, color: "#ea580c" },
        { name: "Docker", level: 65, color: "#3b82f6" },
        { name: "Postman", level: 60, color: "#f97316" },
        { name: "Figma", level: 15, color: "#a855f7" },
        { name: "Canva", level: 60, color: "#ec4899" },
    ],
};

const SkillsSection = () => {
    const canvasRef = useRef(null);
    const bubblesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initialize bubbles
        const bubbles = [];
        Object.keys(skillsData).forEach((category) => {
            skillsData[category].forEach((skill) => {
                const size = Math.max(50, skill.level * 1.5);
                bubbles.push({
                    x: Math.random() * (canvas.width - size) + size / 2,
                    y: Math.random() * (canvas.height - size) + size / 2,
                    dx: (Math.random() - 0.5) * 1,
                    dy: (Math.random() - 0.5) * 1,
                    size,
                    color: skill.color,
                    name: skill.name,
                });
            });
        });

        bubblesRef.current = bubbles;

        // Animation
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bubblesRef.current.forEach((bubble) => {
                // Move
                bubble.x += bubble.dx;
                bubble.y += bubble.dy;

                // Bounce
                if (bubble.x < bubble.size / 2 || bubble.x > canvas.width - bubble.size / 2) bubble.dx *= -1;
                if (bubble.y < bubble.size / 2 || bubble.y > canvas.height - bubble.size / 2) bubble.dy *= -1;

                // Draw bubble
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, bubble.size / 2, 0, Math.PI * 2);
                ctx.fillStyle = bubble.color;
                ctx.fill();
                ctx.closePath();

                // Draw skill name
                ctx.fillStyle = "white";
                ctx.font = `${Math.max(8, bubble.size / 8)}px Arial`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                // Add text shadow for better readability
                ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
                ctx.shadowBlur = 3;
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;

                ctx.fillText(bubble.name, bubble.x, bubble.y);

                // Reset shadow
                ctx.shadowColor = "transparent";
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (

        <canvas
            ref={canvasRef}
            className="w-full max-w-6xl h-[600px] rounded-3xl border border-gray-700/50"
        />

    );
};

export default SkillsSection;