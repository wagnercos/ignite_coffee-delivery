import { useEffect, useState } from 'react'
import { LargeCard } from '../../../components/LargeCard'
import { CoffeeAddQuantityProps, useCoffee } from '../../../hooks/useCoffee'

import api from '../../../services/api'

import { CoffeeListContainer, CoffeeContent } from './styles'

export function CoffeeList() {
  const { addToCart, coffees } = useCoffee()

  const [coffeesApi, setCoffeesApi] = useState<CoffeeAddQuantityProps[]>([])

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
        quantity: 1,
      }))
      console.log(data)
      setCoffeesApi(data)
    }
    loadCoffees()
  }, [coffees])

  function handleAddToCart(coffee: CoffeeAddQuantityProps) {
    addToCart(coffee)
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeContent>
        {coffeesApi.map((coffee) => (
          <LargeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            type={coffee.type}
            price={coffee.price}
            description={coffee.description}
            image={coffee.image}
            quantity={coffee.quantity}
            onAddToCart={() => handleAddToCart(coffee)}
          />
        ))}
      </CoffeeContent>
    </CoffeeListContainer>
  )
}
