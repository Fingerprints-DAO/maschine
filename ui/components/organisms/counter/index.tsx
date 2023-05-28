import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Input } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

type CounterProps = {
  value: number
  maxValue: number
  onAction: (action: 'increase' | 'decrease') => void
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Counter = ({ value, maxValue, onAction, onChange }: CounterProps) => {
  const handleAction = (action: 'increase' | 'decrease') => () => onAction(action)

  return (
    <Flex>
      <IconButton
        isDisabled={value === 0}
        color="gray.900"
        mr={4}
        size="lg"
        variant="outline"
        aria-label="Decrease NFTs amount"
        icon={<MinusIcon />}
        onClick={handleAction('decrease')}
      />
      <Input variant="outline" value={value} size="lg" w={20} onChange={onChange} />
      <IconButton
        isDisabled={value >= maxValue}
        color="gray.900"
        ml={4}
        size="lg"
        variant="outline"
        aria-label="Increase NFTs amount"
        icon={<AddIcon />}
        onClick={handleAction('increase')}
      />
    </Flex>
  )
}

export default Counter
