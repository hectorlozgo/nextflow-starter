import type { Metadata } from 'next'
import { lusitanaSerif, montserratSans } from './fonts'
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
    <html lang="en">
      <body
        className={`bg-background text-foreground font-sans ${montserratSans.variable} ${lusitanaSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
