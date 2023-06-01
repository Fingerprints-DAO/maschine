import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Input } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

type CounterProps = {
  value: number
  minValue?: number
  maxValue: number
  onAction: (action: 'increase' | 'decrease') => void
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Counter = ({ value, minValue = 1, maxValue, onAction, onChange }: CounterProps) => {
  const handleAction = (action: 'increase' | 'decrease') => () => onAction(action)

  return (
    <Flex>
      <IconButton
        isDisabled={!value || value === minValue}
        color="gray.900"
        mr={4}
        size="lg"
        variant="outline"
        aria-label="Decrease NFTs amount"
        _hover={{ '&:disabled': { opacity: 0.4 } }}
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
        _hover={{ '&:disabled': { opacity: 0.4 } }}
        icon={<AddIcon />}
        onClick={handleAction('increase')}
      />
    </Flex>
  )
}

export default Counter
