"use client";

import { motion } from "framer-motion";

export default function ConfirmationCheck() {
  return (
    <div className="relative w-28 h-28">
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-secondary-fixed/30"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-3 rounded-full bg-secondary-fixed/40"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      <motion.div
        className="absolute inset-6 rounded-full bg-secondary-fixed/50"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />
      {/* Main check circle */}
      <motion.div
        className="absolute inset-7 rounded-full bg-secondary-fixed flex items-center justify-center shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <motion.path
            d="M20 6L9 17l-5-5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}