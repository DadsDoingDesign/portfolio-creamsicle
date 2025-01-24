'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface AnimatedContainerProps {
  children: ReactNode
}

export default function AnimatedContainer({ children }: AnimatedContainerProps) {
  const pathname = usePathname();
  const isViewingCaseStudy = pathname.includes('/case-study/');

  return (
    <motion.main 
      className="h-full w-full bg-background-inverse-primary overflow-hidden flex flex-col"
      initial={{ borderRadius: 0, padding: 0 }}
      animate={{ 
        borderRadius: isViewingCaseStudy ? 0 : 16,
        padding: isViewingCaseStudy ? 0 : 32
      }}
      transition={{ duration: 0.4, ease: "linear", delay: isViewingCaseStudy ? 0 : 1 }}
    >
      {children}
    </motion.main>
  )
}
