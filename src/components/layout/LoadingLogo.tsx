'use client'

import { motion, cubicBezier, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LoadingLogo() {
  const [isVisible, setIsVisible] = useState(true)
  const customEase = cubicBezier(0.6, 0.01, 0.05, 0.95)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1600) // Set to 1600ms to ensure animation completes
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
            ease: customEase
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.5]
            }}
            transition={{ 
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: [
                [0.6, 0.01, 0.05, 0.95],
                [0.6, 0.01, 0.05, 0.95]
              ]
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
