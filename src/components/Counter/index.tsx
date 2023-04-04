import { useEffect, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeProps, useCoffee } from '../../hooks/useCoffee'

import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

export function Counter({ id }: CoffeeProps) {
  const { increment, decrement, coffees } = useCoffee()

  const [quantity, setQuantity] = useState<number | undefined>(1)

  useEffect(() => {
    const getQuantity = coffees.find((c) => c.id === id)
    if (getQuantity) {
      setQuantity(getQuantity.quantity)
    }
  }, [coffees, id])

  function handleIncrement(id: number) {
    increment(id)
  }

  function handleDecrement(id: number) {
    decrement(id)
  }

  return (
    <CounterContainer>
      <ButtonDecrease type="button" onClick={() => handleDecrement(id)}>
        <Minus size={14} weight="bold" />
      </ButtonDecrease>
      <input type="number" placeholder={String(quantity)} />
      <ButtonIncrease type="button" onClick={() => handleIncrement(id)}>
        <Plus size={14} weight="bold" />
      </ButtonIncrease>
    </CounterContainer>
  )
}
