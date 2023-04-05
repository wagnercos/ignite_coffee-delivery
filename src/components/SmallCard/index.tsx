import { Trash } from 'phosphor-react'
import { CoffeeProps, useCoffee } from '../../hooks/useCoffee'
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
  const { increment, decrement } = useCoffee()

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
