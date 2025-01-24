'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedContainerProps {
  children: ReactNode
}

export default function AnimatedContainer({ children }: AnimatedContainerProps) {
  return (
    <motion.main 
      className="h-full w-full bg-background-inverse-primary overflow-hidden flex flex-col"
      initial={{ borderRadius: 0, padding: 16 }}
      animate={{ 
        borderRadius: 16,
        padding: ['16px', '24px', '32px'],
        transition: { 
          duration: 2,
          ease: 'easeOut',
          delay: 0.008
        }
      }}
    >
      {children}
    </motion.main>
  )
}
