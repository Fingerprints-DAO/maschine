import { Theme } from '@chakra-ui/react'
import localFont from 'next/font/local'

const mercedes = localFont({
  src: '../../../public/fonts/corporate-a-light.ttf',
  style: 'normal',
})

const helvetica = localFont({
  src: [
    {
      path: '../../../public/fonts/helvetica-light.ttf',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helvetica-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const aktiv_grotesk = localFont({
  src: [
    {
      path: '../../../public/fonts/AktivGrotesk-Thin.ttf',
      weight: '200',
      style: 'thin',
    },
    {
      path: '../../../public/fonts/AktivGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/AktivGrotesk-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
})

const fonts: Partial<Theme['fonts']> = {
  body: aktiv_grotesk.style.fontFamily,
  heading: mercedes.style.fontFamily,
}

export default fonts
