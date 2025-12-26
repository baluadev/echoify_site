'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionContainer from '@/components/SectionContainer'

const screenshots = [
  { id: 1, src: '/screen-1.jpg', alt: 'Home Screen' },
  { id: 2, src: '/screen-2.jpg', alt: 'Playlist View' },
  { id: 3, src: '/screen-3.jpg', alt: 'Player Screen' },
  { id: 4, src: '/screen-4.jpg', alt: 'Discover Page' },
]

export default function Screenshots() {
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
          See It In Action
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
          Take a look at what makes Echoify special
        </p>
      </motion.div>
      
      <div className="overflow-hidden">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-56 sm:w-64 md:w-80 snap-center"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-3 sm:p-4 shadow-2xl border border-gray-200">
                <div className="aspect-[9/19] bg-white rounded-2xl overflow-hidden border border-gray-200 relative">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

