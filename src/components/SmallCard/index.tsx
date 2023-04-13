import { useContext } from "react";
import { Trash } from "phosphor-react";

import { CoffeeContext } from "../../context/CoffeeContext";
import { CoffeeProps } from "../../reducers/reducer";
import { formatPrice } from "../../utils/formatPrice";
import { Counter } from "../Counter";

import {
  Actions,
  ButtonDelete,
  CoffeeInfo,
  Details,
  SmallCardContainer,
} from "./styles";

interface SmallCardType extends CoffeeProps {
  onRemoveFromCart: () => void;
}

export function SmallCard({
  id,
  image,
  title,
  price,
  onRemoveFromCart,
}: SmallCardType) {
  const { increment, decrement, coffeesCart } = useContext(CoffeeContext);

  function handleIncrement(id: number) {
    increment(id);
  }

  function handleDecrement(id: number) {
    decrement(id);
  }

  const isCoffeeAlreadyAddToCart = coffeesCart.find((c) => c.id === id);

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
              quantity={isCoffeeAlreadyAddToCart!.quantity}
            />
            <ButtonDelete type="button" onClick={onRemoveFromCart}>
              <Trash size={16} />
              <span>Remover</span>
            </ButtonDelete>
          </Actions>
        </Details>
      </CoffeeInfo>

      <strong>R$ {formatPrice(price)}</strong>
    </SmallCardContainer>
  );
}
