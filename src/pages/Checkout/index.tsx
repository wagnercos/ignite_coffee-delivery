import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { SmallCard } from '../../components/SmallCard'
import { useCoffee } from '../../hooks/useCoffee'

import {
  CheckoutContainer,
  LeftSideContent,
  RightSideContent,
  AddressInfo,
  PaymentMethodInfo,
  Header,
  InputGroup,
  RadioGroup,
  OrderedCoffees,
  Separator,
  PaymentDetails,
  ItensTotal,
  DeliveryFee,
  Total,
  ButtonConfirmation,
} from './styles'

export function Checkout() {
  const { coffeesCart, removeFromCart } = useCoffee()

  function handleRemoveFromCart(id: number) {
    removeFromCart(id)
  }

  return (
    <CheckoutContainer>
      <form>
        <LeftSideContent>
          <h4>Complete seu pedido</h4>
          <AddressInfo>
            <Header>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </Header>
            <InputGroup>
              <div className="input-group-1">
                <input type="text" name="cep" placeholder="CEP" required />
              </div>
              <input type="text" name="rua" placeholder="Rua" required />

              <div className="input-group-2">
                <input
                  type="number"
                  name="numero"
                  placeholder="Número"
                  required
                />
                <input
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                />
              </div>

              <div className="input-group-1">
                <input
                  type="text"
                  name="bairro"
                  placeholder="Bairro"
                  required
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  required
                />
                <input type="text" name="uf" placeholder="UF" required />
              </div>
            </InputGroup>
          </AddressInfo>

          <PaymentMethodInfo>
            <Header>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </Header>
            <RadioGroup>
              <label htmlFor="cartao-credito">
                <input type="radio" name="pay-method" id="cartao-credito" />
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </label>
              <label htmlFor="cartao-debito">
                <input type="radio" name="pay-method" id="cartao-debito" />
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </label>
              <label htmlFor="dinheiro">
                <input type="radio" name="pay-method" id="dinheiro" />
                <Money size={16} />
                <span>Dinheiro</span>
              </label>
            </RadioGroup>
          </PaymentMethodInfo>
        </LeftSideContent>

        <RightSideContent>
          <h4>Cafés selecionados</h4>
          <OrderedCoffees>
            {coffeesCart.map((coffee) => (
              <div key={coffee.id}>
                <SmallCard
                  id={coffee.id}
                  image={coffee.image}
                  title={coffee.title}
                  price={coffee.price}
                  quantity={coffee.quantity}
                  onRemoveFromCart={() => handleRemoveFromCart(coffee.id)}
                />
                <Separator />
              </div>
            ))}
            <PaymentDetails>
              <ItensTotal>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </ItensTotal>
              <DeliveryFee>
                <p>Total de itens</p>
                <p>R$ 3,50</p>
              </DeliveryFee>
              <Total>
                <h3>Total</h3>
                <h3>R$ 33,20</h3>
              </Total>
            </PaymentDetails>
            <ButtonConfirmation type="submit">
              Confirmar pedido
            </ButtonConfirmation>
          </OrderedCoffees>
        </RightSideContent>
      </form>
    </CheckoutContainer>
  )
}
