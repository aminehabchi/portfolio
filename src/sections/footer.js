"use client";
import React from "react";
import { Github, Linkedin, Trophy, Mail } from "lucide-react";

const Footer = () => {
    return (

        <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
                Let's build something amazing together.
            </p>
            <div className="flex justify-center gap-6">
                <a
                    href="https://github.com/aminehabchi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/amine-habchi-1a9aa4237/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="https://leetcode.com/u/amine_habchi01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                >
                    <Trophy size={20} />
                </a>
                <p
                    className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-800 hover:bg-green-600 transition-all duration-300 hover:scale-105"
                >
                    <Mail size={18} />
                    <span className="text-sm">amine.habchi.01@gmail.com</span>
                </p>
            </div>
        </div>

    );
};

export default Footer;
