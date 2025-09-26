"use client";
import React, { useRef, useEffect } from "react";

export const skillsData = {
  frontend: [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Angular", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "WebSocket", level: 80 },
    { name: "GraphQL", level: 70 },
    { name: "Spring-boot", level: 70 },
    { name: "REST APIs", level: 90 },
    { name: "Golang", level: 80 },
  ],
  database: [
    { name: "PostgreSQL", level: 60 },
    { name: "SqLite", level: 80 },
  ],
  tools: [
    { name: "VS Code", level: 95 },
    { name: "Git", level: 70 },
    { name: "Docker", level: 65 },
    { name: "Postman", level: 60 },
    { name: "Figma", level: 15 },
    { name: "Canva", level: 60 },
  ],
};

// Simple solid color per category
const categoryColors = {
  frontend: "#3b82f6", // Blue
  backend: "#22c55e",  // Green
  database: "#f97316", // Orange
  tools: "#8b5cf6",    // Purple
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
          color: categoryColors[category],
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
        ctx.font = `${Math.max(10, bubble.size / 5)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(bubble.name, bubble.x, bubble.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full max-w-6xl h-[600px] rounded-3xl border border-gray-700/50"
      />
    </div>
  );
};

export default SkillsSection;
