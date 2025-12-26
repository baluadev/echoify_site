import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Echoify - Listen. Share. Connect.',
  description: 'Music & video sharing experience. Share playlists with friends, get personalized recommendations, and enjoy a fast & lightweight player.',
  keywords: 'music app, video sharing, playlist, music streaming, Echoify',
  authors: [{ name: 'Echoify' }],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Echoify - Listen. Share. Connect.',
    description: 'Music & video sharing experience. Share playlists with friends, get personalized recommendations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Echoify - Listen. Share. Connect.',
    description: 'Music & video sharing experience.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

