import { Minus, Plus } from 'phosphor-react'

import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

interface CounterTypes {
  quantity: number
}
interface CounterTypesActived extends CounterTypes {
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({
  onIncrement,
  onDecrement,
  quantity,
}: CounterTypesActived) {
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

export function CounterDisabled({ quantity }: CounterTypes) {
  return (
    <CounterContainer>
      <ButtonDecrease type="button" disabled>
        <Minus size={14} weight="bold" />
      </ButtonDecrease>
      <input type="number" placeholder={String(quantity)} disabled readOnly />
      <ButtonIncrease type="button" disabled>
        <Plus size={14} weight="bold" />
      </ButtonIncrease>
    </CounterContainer>
  )
}
