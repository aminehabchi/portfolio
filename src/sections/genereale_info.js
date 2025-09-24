"use client";
import React from "react";
import { Download, Github, Linkedin, Trophy, Mail } from "lucide-react";

const InfoSection = ({ handleDownloadCV }) => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold">
                        JD
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Amine HABCHI
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Full Stack Developer & Creative Problem Solver
                    </p>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I develop full-stack web applications using React.js, Next.js,
                        Angular, Java, and Go. I build real-time features with WebSockets,
                        implement REST APIs, design databases, and create interactive,
                        responsive frontends. I also handle authentication, state
                        management, and optimize applications for performance and
                        usability.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    {/* Download CV Button */}
                    <button
                        onClick={handleDownloadCV}
                        className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                    >
                        <Download size={20} className="group-hover:animate-bounce" />
                        Download CV
                    </button>

                    {/* Social + Contact Links */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* GitHub */}
                        <a
                            href="https://github.com/aminehabchi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                        >
                            <Github size={20} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/amine-habchi-1a9aa4237/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin size={20} />
                        </a>

                        {/* LeetCode */}
                        <a
                            href="https://leetcode.com/u/amine_habchi01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                        >
                            <Trophy size={20} />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:amine.habchi.01@gmail.com"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-105"
                        >
                            <Mail size={20} />
                            <span className="text-sm">amine.habchi.01@gmail.com</span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+2126781797790"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-105"
                        >
                            <Mail size={20} />
                            <span className="text-sm">+212 678 179 7790</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
