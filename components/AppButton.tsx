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
  const href = isApple ? '#' : 'https://play.google.com/store/apps/details?id=com.nexstudio.echoify'
  const isDisabled = isApple
  
  if (isDisabled) {
    return (
      <div className={`inline-block w-[200px] h-[60px] ${className}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={200}
          height={60}
          className="w-full h-full object-contain opacity-60 cursor-not-allowed"
        />
      </div>
    )
  }
  
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-[200px] h-[60px] transition-all duration-200 hover:opacity-90 hover:scale-105 ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={60}
        className="w-full h-full object-contain"
      />
    </Link>
  )
}

