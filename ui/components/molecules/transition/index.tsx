import { Box } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

const Transition = ({ children }: PropsWithChildren) => {
  const { asPath } = useRouter()

  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.15,
        delay: 0.05,
      },
    },
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <Box as={motion.div} key={asPath} variants={variants} animate="in" initial="out" exit="out" w="full" h="full">
        {children}
      </Box>
    </AnimatePresence>
  )
}

export default Transition
