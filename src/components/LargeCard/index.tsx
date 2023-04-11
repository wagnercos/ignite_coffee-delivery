import { Check, Plus } from 'phosphor-react'
import { useCoffee } from '../../hooks/useCoffee'
import { Counter, CounterDisabled } from '../Counter'
import { CoffeeProps } from '../../reducers/coffees/reducer'
import { formatPrice } from '../../utils/formatPrice'

import {
  LargeCardContainer,
  TagList,
  HeaderCard,
  FooterCard,
  Price,
  AmountSetting,
  ButtonAddToCart,
} from './styles'

interface LargeCardType {
  coffee: CoffeeProps
  onAddToCart: () => void
}

export function LargeCard({ coffee, onAddToCart }: LargeCardType) {
  const { increment, decrement, coffeesCart } = useCoffee()

  function handleIncrement(id: number) {
    increment(id)
  }

  function handleDecrement(id: number) {
    decrement(id)
  }

  const isCoffeeAlreadyAddToCart = coffeesCart.find((c) => c.id === coffee.id)

  return (
    <LargeCardContainer>
      <img src={coffee.image} alt="" />

      <TagList>
        {coffee.type?.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </TagList>

      <HeaderCard>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </HeaderCard>

      <FooterCard>
        <Price>
          <span>R$</span>
          <strong>{formatPrice(coffee.price)}</strong>
        </Price>

        <AmountSetting>
          {isCoffeeAlreadyAddToCart?.id ? (
            <Counter
              onIncrement={() => handleIncrement(coffee.id)}
              onDecrement={() => handleDecrement(coffee.id)}
              quantity={isCoffeeAlreadyAddToCart.quantity}
            />
          ) : (
            <CounterDisabled quantity={1} />
          )}
          <ButtonAddToCart type="button" onClick={onAddToCart}>
            {isCoffeeAlreadyAddToCart?.id ? (
              <Check size={18} weight="bold" />
            ) : (
              <Plus size={18} weight="bold" />
            )}
          </ButtonAddToCart>
        </AmountSetting>
      </FooterCard>
    </LargeCardContainer>
  )
}
