"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] border border-transparent",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 hover:border-white/20",
    outline:
      "bg-transparent border border-indigo-500/50 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
