'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LoadingLogo() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
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
  )
}
