import { LargeCard } from '../../../components/LargeCard'
import { CoffeeProps, useCoffee } from '../../../hooks/useCoffee'

import { CoffeeListContainer, CoffeeContent } from './styles'

export function CoffeeList() {
  const { addToCart, coffees } = useCoffee()

  function handleAddToCart({ ...coffees }: CoffeeProps) {
    addToCart({ ...coffees })
  }

  function renderCoffee(coffees: CoffeeProps) {
    return (
      <LargeCard
        key={coffees.id}
        {...coffees}
        onAddToCart={() => handleAddToCart({ ...coffees })}
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
