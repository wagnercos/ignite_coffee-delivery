import { Minus, Plus } from 'phosphor-react'
import { useMemo } from 'react'
import { useCoffee } from '../../hooks/useCoffee'
import { CoffeeProps } from '../../pages/Home/CoffeeList/ index'
import { ButtonDecrease, ButtonIncrease, CounterContainer } from './styles'

export function Counter({ id }: CoffeeProps) {
  const coffeeContext = useCoffee()

  const coffeeTotalQuantity = useMemo(() => {
    const quantity = coffeeContext?.coffees.reduce((accumulator, coffee) => {
      const coffeeQuantity = coffee.quantity

      return accumulator + coffeeQuantity
    }, 0)
    return quantity
  }, [coffeeContext?.coffees])

  function handleIncrement(id: number) {
    coffeeContext?.increment(id)
    console.log(id)
  }

  return (
    <CounterContainer>
      <ButtonDecrease type="button" onClick={() => {}}>
        <Minus size={14} weight="bold" />
      </ButtonDecrease>
      <input type="number" placeholder={String(coffeeTotalQuantity)} />
      <ButtonIncrease type="button" onClick={() => handleIncrement(id!)}>
        <Plus size={14} weight="bold" />
      </ButtonIncrease>
    </CounterContainer>
  )
}
