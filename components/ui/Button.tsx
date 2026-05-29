"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-kanit-semibold rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-secondary-fixed text-primary hover:bg-[#a0dff5] shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30",
    secondary:
      "bg-primary text-white hover:bg-primary-container shadow-lg shadow-primary/20",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary-fixed hover:text-primary",
    ghost:
      "text-secondary hover:bg-secondary-fixed/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}