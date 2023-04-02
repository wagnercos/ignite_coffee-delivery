import { useState, useEffect } from 'react'
import { LargeCard } from '../../../components/LargeCard'
import { useCoffee } from '../../../hooks/useCoffee'
import api from '../../../services/api'

import { CoffeeListContainer, CoffeeContent } from './styles'

interface CoffeeType extends Array<string> {}

export interface CoffeeProps {
  id?: number
  title: string
  type?: CoffeeType
  price: number
  description?: string
  image: string
  quantity: number
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  const coffeeContext = useCoffee()

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get('/coffees')
      const data = response.data.map((coffee: CoffeeProps) => ({
        ...coffee,
        price: coffee.price
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'code',
          })
          .replace('BRL', '')
          .trim(),
      }))
      console.log(data)
      setCoffees(data)
    }
    loadCoffees()
  }, [])

  function handleAddToCart(coffee: CoffeeProps): void {
    coffeeContext?.addToCart(coffee)
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
            quantity={coffee.quantity}
          />
        ))}
      </CoffeeContent>
    </CoffeeListContainer>
  )
}
