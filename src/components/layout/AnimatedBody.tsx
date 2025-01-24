'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedBodyProps {
  children: ReactNode
}

export default function AnimatedBody({ children }: AnimatedBodyProps) {
  return (
    <motion.div 
      className="font-sans antialiased h-full overflow-hidden"
      initial={{ padding: 0 }}
      animate={{ 
        padding: ['0px', '16px', '24px', '32px'],
        transition: { duration: 0.5, ease: 'easeOut' }
      }}
    >
      {children}
    </motion.div>
  )
}
