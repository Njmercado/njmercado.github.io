import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/lib/store/StoreProvider'
import { Body } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nino Mercado',
  description: 'Portfolio of projects of Nino Mercado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <Body>{children}</Body>
      </html>
    </StoreProvider>
  )
}
