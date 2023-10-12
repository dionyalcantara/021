import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['400', '700']})

export const metadata: Metadata = {
  title: 'Overwatch Database',
  description: 'Um simples database dos personagens do overwatch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} text-white bg-gradient-to-r from-blue-800 to-blue-600`}>{children}</body>
    </html>
  )
}
