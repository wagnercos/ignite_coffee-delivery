import { Minus, Plus } from 'phosphor-react'
import { CoffeeAddQuantityProps, useCoffee } from '../../hooks/useCoffee'

import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

export function Counter({ id, quantity }: CoffeeAddQuantityProps) {
  const { increment } = useCoffee()

  function handleIncrement(id: number) {
    increment(id)
    console.log(id)
  }

  return (
    <CounterContainer>
      <ButtonDecrease type="button" onClick={() => {}}>
        <Minus size={14} weight="bold" />
      </ButtonDecrease>
      <input type="number" placeholder={String(quantity)} />
      <ButtonIncrease type="button" onClick={() => handleIncrement(id)}>
        <Plus size={14} weight="bold" />
      </ButtonIncrease>
    </CounterContainer>
  )
}
