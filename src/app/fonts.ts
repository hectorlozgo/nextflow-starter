import { Montserrat, Lusitana } from 'next/font/google'

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

export const lusitana = Lusitana({
  variable: '--font-lusitana',
  weight: ['400', '700'],
  subsets: ['latin']
})
