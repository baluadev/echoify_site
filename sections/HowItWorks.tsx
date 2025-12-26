'use client'

import { motion } from 'framer-motion'
import { Download, Search, Heart } from 'lucide-react'
import SectionContainer from '@/components/SectionContainer'

const steps = [
  {
    icon: Download,
    title: 'Download',
    description: 'Download Echoify from the App Store or Google Play',
  },
  {
    icon: Search,
    title: 'Discover',
    description: 'Explore millions of songs and create your playlists',
  },
  {
    icon: Heart,
    title: 'Share & Connect',
    description: 'Share your music with friends and connect through sound',
  },
]

export default function HowItWorks() {
  return (
    <SectionContainer className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          How It Works
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
          Get started in three simple steps
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-8 lg:gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 pt-12 md:pt-12 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 xl:-right-12 w-8 lg:w-12 xl:w-24 h-0.5 bg-gradient-to-r from-red-300 to-red-100"></div>
              )}
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}

