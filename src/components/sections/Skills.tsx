"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Database, BrainCircuit, Wrench, ShieldCheck } from "lucide-react";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Laptop size={20} className="text-indigo-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: <Database size={20} className="text-purple-400" />,
      skills: ["PHP", "Laravel", "CodeIgniter", "MySQL", "PL/SQL (Database Design)", "REST APIs", "Node.js"],
    },
    {
      title: "AI & Speech Technology",
      icon: <BrainCircuit size={20} className="text-cyan-400" />,
      skills: ["Python", "PyTorch", "Speech Synthesis (VITS)", "Machine Learning (Beginner)", "Dataset Prep", "Jupyter Notebook"],
    },
    {
      title: "Tools & Design Systems",
      icon: <Wrench size={20} className="text-emerald-400" />,
      skills: ["Git", "GitHub", "Figma", "Canva", "VS Code", "Vercel", "Microsoft Office"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      {/* Background glow overlay */}
      <div className="glow-bg top-1/3 right-10 bg-purple-600/10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-2 flex items-center justify-center gap-2">
            <ShieldCheck size={14} />
            <span>Abilities</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h3>
          <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white">{category.title}</h4>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
