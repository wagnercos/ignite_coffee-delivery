import { LargeCard } from '../../../components/LargeCard'
import { useCoffee } from '../../../hooks/useCoffee'
import { CoffeeProps } from '../../../reducers/coffees/reducer'

import { CoffeeListContainer, CoffeeContent } from './styles'

export function CoffeeList() {
  const { addToCart, coffees } = useCoffee()

  function handleAddToCart(coffee: CoffeeProps) {
    addToCart(coffee)
  }

  function renderCoffee(coffee: CoffeeProps) {
    return (
      <LargeCard
        key={coffee.id}
        {...coffee}
        onAddToCart={() => handleAddToCart(coffee)}
      />
    )
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeContent>{coffees.map(renderCoffee)}</CoffeeContent>
    </CoffeeListContainer>
  )
}
