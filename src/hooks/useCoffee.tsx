import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'

interface ChildrenType {
  children: React.ReactNode
}

interface CoffeeType extends Array<string> {}

export interface CoffeeProps {
  id: number
  title: string
  type?: CoffeeType
  price: number
  description?: string
  image: string
  quantity: number
}

interface CoffeeContextType {
  coffees: CoffeeProps[]
  coffeesCart: CoffeeProps[]
  addToCart: (coffee: CoffeeProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
}

const CoffeeContext = createContext<CoffeeContextType>({
  coffees: [],
  coffeesCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increment: () => {},
  decrement: () => {},
})

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [coffeesCart, setCoffeesCart] = useState<CoffeeProps[]>([])

  useEffect(() => {
    async function loadCoffees(): Promise<void> {
      const storagedCoffees = localStorage.getItem('@CoffeeDelivery')

      if (storagedCoffees) {
        setCoffeesCart([...JSON.parse(storagedCoffees)])
      }
    }

    loadCoffees()
  }, [])

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get('/coffees')
      const data = response.data.map((coffee: CoffeeProps) => ({
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
      setCoffees(data)
    }
    loadCoffees()
  }, [])

  function addToCart(coffee: CoffeeProps) {
    const coffeeExist = coffeesCart.find((c) => c.id === coffee.id)
    if (!coffeeExist) {
      setCoffeesCart((state) => [...state, coffee])
      return localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffee))
    } else {
      setCoffeesCart((state) => [...state])
    }
  }

  function increment(id: number) {
    const coffeeIndex = coffees.findIndex((c) => c.id === id)
    if (coffeeIndex === -1) {
      console.error(`Coffee with ID ${id} not found`)
      return
    }
    const updatedCoffee = {
      ...coffees[coffeeIndex],
      quantity: coffees[coffeeIndex].quantity + 1,
    }
    const newCoffee = [...coffees]
    newCoffee[coffeeIndex] = updatedCoffee
    setCoffees(newCoffee)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(updatedCoffee))
  }

  function decrement(id: number) {
    const coffeeIndex = coffees.findIndex((c) => c.id === id)
    if (coffeeIndex === -1) {
      console.error(`Coffee with ID ${id} not found`)
      return
    }
    const updatedCoffee = {
      ...coffees[coffeeIndex],
      quantity:
        coffees[coffeeIndex].quantity > 1
          ? coffees[coffeeIndex].quantity - 1
          : coffees[coffeeIndex].quantity,
    }
    const newCoffee = [...coffees]
    newCoffee[coffeeIndex] = updatedCoffee
    setCoffees(newCoffee)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(updatedCoffee))
  }

  function removeFromCart(id: number) {
    const coffeeRemoved = coffeesCart.filter((coffee) => coffee.id !== id)
    setCoffeesCart(coffeeRemoved)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffeeRemoved))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        coffeesCart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)

  return context
}
