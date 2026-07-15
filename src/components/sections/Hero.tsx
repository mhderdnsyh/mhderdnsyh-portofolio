"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030014]"
    >
      {/* Dynamic Background Glows */}
      <div className="glow-bg top-10 left-10 bg-indigo-600/30"></div>
      <div className="glow-bg bottom-10 right-10 bg-cyan-600/25"></div>
      <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-mono mb-8 backdrop-blur-sm"
        >
          <MapPin size={14} className="text-indigo-400 animate-pulse" />
          <span>Pekanbaru, Riau, Indonesia</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Muhammad{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-glow-indigo">
            Erdiansyah
          </span>
        </motion.h1>

        {/* Roles/Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-zinc-400 font-medium mb-4 max-w-2xl mx-auto flex items-center justify-center gap-2"
        >
          <Sparkles size={20} className="text-cyan-400" />
          <span>Software Developer & IT Enthusiast</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-500 font-mono text-sm mb-8 tracking-wider"
        >
          "Rebuild it, brick by brick."
        </motion.p>

        {/* Mini Intro description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Building high-performance web applications and researching Javanese dialect Text-to-Speech models using VITS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button variant="primary" size="lg" className="gap-2">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Decorative absolute element at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Scroll down</span>
        <div className="w-1.5 h-6 rounded-full bg-zinc-800 flex justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1.5 rounded-full bg-indigo-500"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
