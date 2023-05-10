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
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

const fonts: Partial<Theme['fonts']> = {
  body: helvetica.style.fontFamily,
  heading: mercedes.style.fontFamily,
}

export default fonts
