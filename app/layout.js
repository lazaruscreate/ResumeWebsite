import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Michael X. Anderson',
  description: 'Tech Professional & Air Force Veteran — Cloud, AWS, Java, Python, SQL.',
  openGraph: {
    title: 'Michael X. Anderson',
    description: 'Tech Professional & Air Force Veteran with 8+ years in cloud, engineering, and technical leadership.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
