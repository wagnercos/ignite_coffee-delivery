import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useCoffee } from '../../hooks/useCoffee'
import { CoffeeProps } from '../../reducers/coffees/reducer'
import { Counter } from '../Counter'
import {
  Actions,
  ButtonDelete,
  CoffeeInfo,
  Details,
  SmallCardContainer,
} from './styles'

interface SmallCardType extends CoffeeProps {
  onRemoveFromCart: () => void
}

export function SmallCard({
  id,
  image,
  title,
  price,
  onRemoveFromCart,
}: SmallCardType) {
  const [quantity, setQuantity] = useState<number>(1)
  const { increment, decrement, coffees, coffeesCart } = useCoffee()

  useEffect(() => {
    const coffee = coffeesCart.find((q) => q.id === id)
    setQuantity(coffee!.quantity)
  }, [coffeesCart, id, quantity])

  function handleIncrement(id: number) {
    increment(id)
  }

  function handleDecrement(id: number) {
    decrement(id)
  }
  return (
    <SmallCardContainer>
      <CoffeeInfo>
        <img src={image} alt="" />
        <Details>
          <p>{title}</p>
          <Actions>
            <Counter
              onIncrement={() => handleIncrement(id)}
              onDecrement={() => handleDecrement(id)}
              quantity={quantity}
            />
            <ButtonDelete type="button" onClick={onRemoveFromCart}>
              <Trash size={16} />
              <span>Remover</span>
            </ButtonDelete>
          </Actions>
        </Details>
      </CoffeeInfo>

      <strong>R$ {price}</strong>
    </SmallCardContainer>
  )
}
