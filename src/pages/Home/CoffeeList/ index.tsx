import { useEffect, useState } from 'react'
import { LargeCard } from '../../../components/LargeCard'
import { CoffeeAddQuantityProps, useCoffee } from '../../../hooks/useCoffee'

import api from '../../../services/api'

import { CoffeeListContainer, CoffeeContent } from './styles'

export function CoffeeList() {
  const { addToCart, quantity } = useCoffee()

  const [coffees, setCoffees] = useState<CoffeeAddQuantityProps[]>([])

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get('/coffees')
      const data = response.data.map((coffee: CoffeeAddQuantityProps) => ({
        ...coffee,
        price: coffee
          .price!.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'code',
          })
          .replace('BRL', '')
          .trim(),
      }))
      setCoffees(data)
    }
    loadCoffees()
  }, [])

  function handleAddToCart(coffee: CoffeeAddQuantityProps) {
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
            quantity={quantity}
            onAddToCart={() => handleAddToCart(coffee)}
          />
        ))}
      </CoffeeContent>
    </CoffeeListContainer>
  )
}
