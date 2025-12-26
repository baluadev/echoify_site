'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionContainer from '@/components/SectionContainer'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Music Enthusiast',
    quote: 'Echoify has completely changed how I discover and share music. The recommendations are spot-on!',
    avatar: '👩',
  },
  {
    name: 'Michael Chen',
    role: 'Playlist Creator',
    quote: 'The sharing features are incredible. My friends and I create collaborative playlists all the time.',
    avatar: '👨',
  },
  {
    name: 'Emma Davis',
    role: 'Daily Listener',
    quote: 'Fast, beautiful, and intuitive. This is the music app I\'ve been waiting for.',
    avatar: '👩‍🦰',
  },
]

export default function Testimonials() {
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
          What People Say
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
          Join thousands of happy users
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-100"
          >
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-red-200 absolute top-4 right-4 sm:top-6 sm:right-6" />
            <div className="mb-4 md:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-3 md:mb-4">
                {testimonial.avatar}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 md:mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

