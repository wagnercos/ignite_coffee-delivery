import { Plus } from 'phosphor-react'
import { CoffeeAddQuantityProps } from '../../hooks/useCoffee'
import { Counter } from '../Counter'

import {
  LargeCardContainer,
  TagList,
  HeaderCard,
  FooterCard,
  Price,
  AmountSetting,
  ButtonAddToCart,
} from './styles'

interface LargeCardType extends CoffeeAddQuantityProps {
  onAddToCart: () => void
}

export function LargeCard({
  id,
  title,
  type,
  description,
  image,
  price,
  onAddToCart,
}: LargeCardType) {
  return (
    <LargeCardContainer>
      <img src={image} alt="" />

      <TagList>
        {type?.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </TagList>

      <HeaderCard>
        <h3>{title}</h3>
        <p>{description}</p>
      </HeaderCard>

      <FooterCard>
        <Price>
          <span>R$</span>
          <strong>{price}</strong>
        </Price>

        <AmountSetting>
          <Counter id={id} />
          <ButtonAddToCart type="button" onClick={onAddToCart}>
            <Plus size={18} weight="bold" />
          </ButtonAddToCart>
        </AmountSetting>
      </FooterCard>
    </LargeCardContainer>
  )
}
