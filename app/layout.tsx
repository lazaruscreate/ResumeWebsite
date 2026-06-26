import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Michael X. Anderson',
  description: 'Tech Professional & Air Force Veteran — Cloud, AWS, Java, Python, SQL.',
  openGraph: {
    title: 'Michael X. Anderson',
    description: 'Tech Professional & Air Force Veteran with 8+ years in cloud, engineering, and technical operations.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.className} bg-slate-900 text-slate-400 antialiased`}>
        {children}
      </body>
    </html>
  )
}
