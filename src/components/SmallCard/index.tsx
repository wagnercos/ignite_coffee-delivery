import { Trash } from 'phosphor-react'
import { CoffeeAddQuantityProps } from '../../hooks/useCoffee'
import { Counter } from '../Counter'
import {
  Actions,
  ButtonDelete,
  CoffeeInfo,
  Details,
  SmallCardContainer,
} from './styles'

interface SmallCardType extends CoffeeAddQuantityProps {
  onRemoveFromCart: () => void
}

export function SmallCard({
  id,
  image,
  title,
  price,
  onRemoveFromCart,
}: SmallCardType) {
  return (
    <SmallCardContainer>
      <CoffeeInfo>
        <img src={image} alt="" />
        <Details>
          <p>{title}</p>
          <Actions>
            <Counter id={id} />
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
