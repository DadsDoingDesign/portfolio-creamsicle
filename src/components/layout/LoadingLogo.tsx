'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LoadingLogo() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1000) // Total animation time
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "linear",
            delay: 0.2
          }}
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: 0.5,
              opacity: 0
            }}
            transition={{ 
              duration: 0.8,
              ease: "linear",
              delay: 0.2
            }}
          >
            <Image
              src="/dendenlogo.svg"
              alt="DenDen Logo"
              width={120}
              height={120}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
