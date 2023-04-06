import { useEffect, useState } from 'react'
import { Plus } from 'phosphor-react'
import { CoffeeProps, useCoffee } from '../../hooks/useCoffee'
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

interface LargeCardType extends CoffeeProps {
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
  const [quantity, setQuantity] = useState<number>(1)
  const { increment, decrement, coffees } = useCoffee()

  useEffect(() => {
    const coffee = coffees.find((q) => q.id === id)
    setQuantity(coffee!.quantity)
    console.log(coffee)
  }, [coffees, id, quantity])

  function handleIncrement(id: number) {
    increment(id)
  }

  function handleDecrement(id: number) {
    decrement(id)
  }

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
          <Counter
            onIncrement={() => handleIncrement(id)}
            onDecrement={() => handleDecrement(id)}
            quantity={quantity}
          />
          <ButtonAddToCart type="button" onClick={onAddToCart}>
            <Plus size={18} weight="bold" />
          </ButtonAddToCart>
        </AmountSetting>
      </FooterCard>
    </LargeCardContainer>
  )
}
