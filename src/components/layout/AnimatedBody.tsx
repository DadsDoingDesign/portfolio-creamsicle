'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedBodyProps {
  children: ReactNode
}

export default function AnimatedBody({ children }: AnimatedBodyProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear", delay: 1 }}
      className="flex-1 overflow-y-auto"
    >
      {children}
    </motion.div>
  )
}
