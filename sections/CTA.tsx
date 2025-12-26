'use client'

import { motion } from 'framer-motion'
import AppButton from '@/components/AppButton'

export default function CTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            Ready to Start Listening?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Download Echoify today and join millions of music lovers around the world.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4 sm:px-0"
          >
            <AppButton store="apple" className="w-full sm:w-auto" />
            <AppButton store="google" className="w-full sm:w-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

