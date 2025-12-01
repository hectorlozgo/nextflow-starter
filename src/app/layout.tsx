import type { Metadata } from 'next'
import { lusitana, montserrat } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Project',
  description: 'My starter Project'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${lusitana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
