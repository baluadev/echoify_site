import Link from 'next/link'
import Image from 'next/image'

interface AppButtonProps {
  store: 'apple' | 'google'
  className?: string
}

export default function AppButton({ store, className = '' }: AppButtonProps) {
  const isApple = store === 'apple'
  const imageSrc = isApple ? '/app-store-button.svg' : '/google-play-button.svg'
  const imageAlt = isApple ? 'Download on the App Store' : 'Get it on Google Play'
  
  return (
    <Link
      href="#"
      className={`inline-block transition-all duration-200 hover:opacity-90 hover:scale-105 ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={isApple ? 180 : 200}
        height={60}
        className="h-auto"
      />
    </Link>
  )
}

