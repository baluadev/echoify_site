'use client'

import { motion } from 'framer-motion'
import { Share2, Sparkles, Bell, Zap } from 'lucide-react'
import SectionContainer from '@/components/SectionContainer'

const features = [
  {
    icon: Share2,
    title: 'Share Playlists',
    description: 'Share your favorite playlists with friends and discover new music together.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Recommendations',
    description: 'Get music recommendations tailored to your taste and listening habits.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay updated with smart notifications about new releases and friend activity.',
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    description: 'Enjoy a blazing-fast player that uses minimal resources and battery.',
  },
]

export default function Features() {
  return (
    <SectionContainer className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Powerful Features
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
          Everything you need for the perfect music experience
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}

