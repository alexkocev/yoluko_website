import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yoluko-navy text-white text-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 max-w-2xl w-full">
        <h1 className="text-6xl font-bold text-yoluko-teal mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/en">
              Go Home (English)
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/fr">
              Accueil (Français)
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: '404 - Page Not Found | Yoluko Solutions',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}
