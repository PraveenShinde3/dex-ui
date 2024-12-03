"use client";

import React from "react";
import { motion } from "framer-motion";

interface BouncingDotsProps {
  color?: string;
  size?: number;
  speed?: number;
}

export const BouncingDots: React.FC<BouncingDotsProps> = ({
  color = "bg-primary",
  size = 4,
  speed = 0.5,
}) => {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -8 },
  };

  return (
    <div
      className="flex items-center justify-center space-x-1.5"
      role="status"
      aria-label="Loading"
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${color} rounded-full`}
          style={{ width: `${size}px`, height: `${size}px` }}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: speed,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};
