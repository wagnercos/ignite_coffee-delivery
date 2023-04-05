import { Minus, Plus } from 'phosphor-react'
import { useCoffee } from '../../hooks/useCoffee'

import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

interface CounterTypes {
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({ onIncrement, onDecrement }: CounterTypes) {
  const { coffeeQuantity } = useCoffee()

  return (
    <CounterContainer>
      <ButtonDecrease type="button" onClick={onDecrement}>
        <Minus size={14} weight="bold" />
      </ButtonDecrease>
      <input type="number" placeholder={String(coffeeQuantity)} />
      <ButtonIncrease type="button" onClick={onIncrement}>
        <Plus size={14} weight="bold" />
      </ButtonIncrease>
    </CounterContainer>
  )
}
