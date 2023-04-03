import { useEffect, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeAddQuantityProps, useCoffee } from '../../hooks/useCoffee'

import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

export function Counter({ id }: CoffeeAddQuantityProps) {
  const { increment, decrement, coffeesCart } = useCoffee()

  const [quantity, setQuantity] = useState<number | undefined>(1)

  useEffect(() => {
    const getQuantity = coffeesCart.find((c) => c.id === id)
    if (getQuantity) {
      setQuantity(getQuantity.quantity)
    }
  }, [coffeesCart, id])

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
