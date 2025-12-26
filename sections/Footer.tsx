'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  legal: [
    { name: 'Privacy Policy & Terms of Service', href: '/privacy-policy' },
    { name: 'Contact', href: 'mailto:nexstudio.up@gmail.com' },
  ],
  social: [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584928015375', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/echoify88', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/nexstudio.up', label: 'Instagram' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <Image
                src="/logo.svg"
                alt="Echoify Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Echoify</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Music & video sharing experience. Listen. Share. Connect.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => {
                const isEmail = link.href.startsWith('mailto:')
                
                if (isEmail) {
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-base hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                }
                
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm sm:text-base">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Echoify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

