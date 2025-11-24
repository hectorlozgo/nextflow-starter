import { Montserrat, Lusitana } from 'next/font/google'

export const montserratSans = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

export const lusitanaSerif = Lusitana({
  variable: '--font-lusitana',
  weight: ['400', '700'],
  subsets: ['latin']
})
