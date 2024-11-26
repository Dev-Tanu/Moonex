"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#001219] py-24 sm:py-32">
      {/* Decorative elements */}
      <motion.div
        className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-yellow-400/80 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-white" />
      <div className="absolute right-1/3 top-1/4 h-2 w-2 rounded-full bg-white" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-neue-machina text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Trusted Multi-Chain
            <br />
            <span className="text-yellow-400">DEX Platform</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-raleway text-lg leading-8 text-gray-300"
          >
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Connect Wallet
            </Button>
            <Button variant="outline" className="text-black">Trade Crypto</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

