'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import AppButton from '@/components/AppButton'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Force play video
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Silently handle autoplay failure
        })
      }
      
      // Handle video errors
      video.addEventListener('error', () => {
        const target = video
        if (target) {
          target.style.display = 'none'
        }
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback gradient - only shows if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 z-0"></div>
        
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{ minWidth: '100%', minHeight: '100%' }}
          onError={(e) => {
            const target = e.target as HTMLVideoElement
            if (target) {
              target.style.display = 'none'
            }
          }}
        >
          {/* Option 1: Local video file (recommended) - Place video in /public folder */}
          {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
          
          {/* Option 2: Google Drive (may not work due to CORS) */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability - reduced opacity */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Image
                src="/logo.svg"
                alt="Echoify Logo"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Echoify
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900"
            >
              Listen. Share. Connect.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
            >
              Music & video sharing experience. Discover new sounds, share your favorites, and connect with friends through the power of music.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <AppButton store="apple" className="w-full sm:w-auto" />
              <AppButton store="google" className="w-full sm:w-auto" />
            </motion.div>
          </motion.div>
          
          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-gray-100 rounded-3xl blur-3xl opacity-50 -z-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-3 sm:p-4 border border-gray-100">
                <div className="aspect-[9/19] bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 relative">
                  <Image
                    src="/screen-1.jpg"
                    alt="Echoify App Screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-700"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

