import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Dashboard',
  description: 'Next-Gen Learning Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#0a0a0f' }}>
      <body
        className={inter.className}
        style={{ backgroundColor: '#0a0a0f', margin: 0, padding: 0 }}
      >
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: '#0a0a0f' }}>
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#0a0a0f' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}