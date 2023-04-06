import { Minus, Plus } from 'phosphor-react'

import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

interface CounterTypes {
  onIncrement: () => void
  onDecrement: () => void
  quantity: number
}

export function Counter({ onIncrement, onDecrement, quantity }: CounterTypes) {
  return (
    <CounterContainer>
      <ButtonDecrease type="button" onClick={onDecrement}>
        <Minus size={14} weight="bold" />
      </ButtonDecrease>
      <input type="number" placeholder={String(quantity)} />
      <ButtonIncrease type="button" onClick={onIncrement}>
        <Plus size={14} weight="bold" />
      </ButtonIncrease>
    </CounterContainer>
  )
}
