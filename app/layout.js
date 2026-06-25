import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-space' })

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
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  )
}
