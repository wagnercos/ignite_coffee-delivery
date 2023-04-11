import { SmallCard } from '../../../components/SmallCard'
import { useCoffee } from '../../../hooks/useCoffee'
import { CoffeeProps } from '../../../reducers/coffees/reducer'
import { formatPrice } from '../../../utils/formatPrice'

import {
  ButtonConfirmation,
  CoffeeOrderDataContainer,
  DeliveryFee,
  ItensTotal,
  OrderedCoffees,
  PaymentDetails,
  Separator,
  Total,
} from './styles'

export function CoffeeOrderData() {
  const { coffeesCart, removeFromCart } = useCoffee()

  const cartSubTotal = coffeesCart.reduce((accumulator, coffee) => {
    const coffeeTotal = coffee.price * coffee.quantity

    return accumulator + coffeeTotal
  }, 0)

  const deliveryFee = 3.5

  function handleRemoveFromCart(id: number) {
    removeFromCart(id)
  }

  function renderCoffee(coffee: CoffeeProps) {
    return (
      <div key={coffee.id}>
        <SmallCard
          {...coffee}
          onRemoveFromCart={() => handleRemoveFromCart(coffee.id)}
        />
        <Separator />
      </div>
    )
  }
  return (
    <CoffeeOrderDataContainer>
      <h4>Cafés selecionados</h4>
      <OrderedCoffees>
        {coffeesCart.map(renderCoffee)}
        <PaymentDetails>
          <ItensTotal>
            <p>Total de itens</p>
            {coffeesCart.length > 0 ? (
              <p>R$ {formatPrice(cartSubTotal)}</p>
            ) : (
              <p>R$ 0,00</p>
            )}
          </ItensTotal>
          <DeliveryFee>
            <p>Taxa de entrega</p>
            <p>R$ {formatPrice(deliveryFee)}</p>
          </DeliveryFee>
          <Total>
            <h3>Total</h3>
            <h3>R$ {formatPrice(deliveryFee + cartSubTotal)}</h3>
          </Total>
        </PaymentDetails>
        <ButtonConfirmation type="submit">Confirmar pedido</ButtonConfirmation>
      </OrderedCoffees>
    </CoffeeOrderDataContainer>
  )
}
