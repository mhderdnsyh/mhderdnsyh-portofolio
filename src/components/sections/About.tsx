"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, User } from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 size={24} className="text-indigo-400" />,
      title: "Frontend Engineering",
      desc: "Creating high-fidelity user interfaces using React, Next.js, and Tailwind CSS. Obsessed with performance and fluid user experiences.",
    },
    {
      icon: <Cpu size={24} className="text-purple-400" />,
      title: "AI Research",
      desc: "Exploring speech synthesis models. Developed Javanese dialect TTS models using VITS (Variational Inference Text-to-Speech).",
    },
    {
      icon: <GraduationCap size={24} className="text-cyan-400" />,
      title: "Academic Background",
      desc: "Studying Informatics Engineering at State Islamic University of Sultan Syarif Kasim Riau, bridging theoretical computer science with code.",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-[#030014]/50 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-2 flex items-center justify-center gap-2">
            <User size={14} />
            <span>Profile</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">About Me</h3>
          <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h4 className="text-2xl font-bold text-white font-mono">
              Hi, I'm Muhammad Erdiansyah.
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              I am an Informatics Engineering student at State Islamic University of Sultan Syarif Kasim Riau, Pekanbaru, Indonesia. I specialize in building responsive, modern frontend applications and exploring the practical capabilities of artificial intelligence.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My philosophy, <strong className="text-white font-mono">"Rebuild it, brick by brick,"</strong> represents my commitment to understanding software systems deeply from the ground up, whether it's configuring a robust Next.js application, implementing structured database tables, or optimizing neural network architectures for Speech Synthesis.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex gap-4 hover:border-indigo-500/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
