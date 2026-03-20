import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface text-center p-4">
      <div className="bg-surface-container rounded-xl p-8 md:p-12 border border-outline-variant/10 max-w-2xl w-full">
        <h1 className="text-6xl font-headline font-black text-primary mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-on-surface-variant mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold hover:bg-primary-dim transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export const metadata = {
  title: '404 - Page Not Found | Yoluko',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}
