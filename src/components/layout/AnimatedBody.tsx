'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedBodyProps {
  children: ReactNode
}

export default function AnimatedBody({ children }: AnimatedBodyProps) {
  return (
    <motion.div 
      className="font-sans antialiased h-full overflow-hidden flex-1 overflow-y-auto"
      initial={{ padding: 0, borderRadius: 0 }}
      animate={{ 
        padding: 32,
        borderRadius: 16
      }}
      transition={{ 
        duration: 0.4,
        ease: "linear",
        delay: .2
      }}
    >
      {children}
    </motion.div>
  )
}
