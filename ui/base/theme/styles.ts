import { Theme } from '@chakra-ui/react'

const styles: Theme['styles'] = {
  global: ({ theme }) => ({
    body: {
      backgroundColor: theme.colors.gray[900],
      color: theme.colors.white,
      fontWeight: 400,
    },
  }),
}

export default styles
