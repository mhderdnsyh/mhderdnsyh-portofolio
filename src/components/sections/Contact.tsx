"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request send
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success badge after 4s
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#030014]/50 border-t border-zinc-900">
      {/* Background neon light glow */}
      <div className="glow-bg bottom-10 left-10 bg-cyan-600/10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-2 flex items-center justify-center gap-2">
            <MessageSquare size={14} />
            <span>Connect</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h3>
          <div className="w-12 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Let's build something great</h4>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Have a question, project proposal, or just want to connect? Drop a message in the form, or reach out directly on my social profiles.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:erdiansyah@example.com"
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono">EMAIL DIRECT</p>
                  <p className="text-white text-sm font-medium">erdiansyah@example.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-erdiansyah-teknik-informatika/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono">LINKEDIN</p>
                  <p className="text-white text-sm font-medium">muhammad-erdiansyah</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/mhderdnsyh/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-indigo-500/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-mono">INSTAGRAM</p>
                  <p className="text-white text-sm font-medium">@mhderdnsyh</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact form panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl border border-white/5 relative"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#030014]/90 rounded-2xl z-10 flex flex-col items-center justify-center p-6 text-center"
              >
                <CheckCircle2 size={56} className="text-emerald-400 mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-zinc-400 max-w-sm">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="w-full gap-2 py-3"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
