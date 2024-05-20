import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin-ext'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Portfolio - zerok06',
  description: 'Web Developer - Learning AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased bg-dark text-white',
          poppins.variable,
          inter.variable
        )}
      >
        {children}
        <Toaster
          toastOptions={{
            className: 'bg-dark text-white border-white/20',
          }}
        />
      </body>
    </html>
  )
}
