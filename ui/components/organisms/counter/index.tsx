import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Input } from '@chakra-ui/react'

const Counter = () => {
  return (
    <Flex>
      <IconButton color="gray.900" mr={4} size="lg" variant="outline" aria-label="Decrease NFTs amount" icon={<MinusIcon />} onClick={() => null} />
      <Input variant="outline" value={1} size="lg" w={20} onChange={() => null} />
      <IconButton color="gray.900" ml={4} size="lg" variant="outline" aria-label="Increase NFTs amount" icon={<AddIcon />} onClick={() => null} />
    </Flex>
  )
}

export default Counter
