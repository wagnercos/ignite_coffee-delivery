import { Trash } from 'phosphor-react'
import { CoffeeProps } from '../../hooks/useCoffee'
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
  return (
    <SmallCardContainer>
      <CoffeeInfo>
        <img src={image} alt="" />
        <Details>
          <p>{title}</p>
          <Actions>
            <Counter id={id} title={''} price={0} image={''} quantity={0} />
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
