'use client';

import { motion } from 'framer-motion';

export function AnimatedGradient() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      animate={{
        background: [
          'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 191 36) 100%)',
          'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 146 60) 100%)',
          'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 191 36) 100%)',
          'linear-gradient(180deg, rgb(251 191 36) 0%, rgb(251 191 36) 100%)',
          'linear-gradient(180deg, rgb(251 146 60) 0%, rgb(251 191 36) 100%)'
        ]
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        repeat: Infinity
      }}
    />
  );
}
