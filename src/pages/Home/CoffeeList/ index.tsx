import { LargeCard } from '../../../components/LargeCard'
import { CoffeeProps, useCoffee } from '../../../hooks/useCoffee'

import { CoffeeListContainer, CoffeeContent } from './styles'

export function CoffeeList() {
  const { addToCart, coffees } = useCoffee()

  function handleAddToCart(coffee: CoffeeProps) {
    addToCart(coffee)
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeContent>
        {coffees.map((coffee) => (
          <LargeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            type={coffee.type}
            price={coffee.price}
            description={coffee.description}
            image={coffee.image}
            onAddToCart={() => handleAddToCart(coffee)}
            quantity={0}
          />
        ))}
      </CoffeeContent>
    </CoffeeListContainer>
  )
}
