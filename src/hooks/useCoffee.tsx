import React, { createContext, useContext, useEffect, useState } from 'react'

interface ChildrenType {
  children: React.ReactNode
}

interface CoffeeType extends Array<string> {}

interface CoffeeProps {
  id: number
  title?: string
  type?: CoffeeType
  price?: number
  description?: string
  image?: string
}

export interface CoffeeAddQuantityProps extends CoffeeProps {
  quantity: number
}

interface CoffeeContextType {
  coffees: CoffeeAddQuantityProps[]
  addToCart: (coffee: CoffeeAddQuantityProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
}

const CoffeeContext = createContext<CoffeeContextType>({
  coffees: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increment: () => {},
})

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffees, setCoffees] = useState<CoffeeAddQuantityProps[]>([])

  useEffect(() => {
    async function loadCoffees(): Promise<void> {
      const storagedProducts = localStorage.getItem('@CoffeeDelivery')

      if (storagedProducts) {
        setCoffees([...JSON.parse(storagedProducts)])
      }
    }

    loadCoffees()
  }, [])

  function addToCart(coffee: CoffeeAddQuantityProps) {
    const coffeeExist = coffees.find((c) => c.id === coffee.id)
    if (!coffeeExist) {
      setCoffees((state) => [...state, { ...coffee, quantity: 1 }])
      localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffee))
    } else {
      setCoffees((state) => [...state])
    }
  }

  function increment(id: number) {
    const newCoffee = coffees.map((c) =>
      c.id === id ? { ...c, quantity: c.quantity + 1 } : c,
    )
    setCoffees(newCoffee)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(newCoffee))
  }

  function removeFromCart(id: number) {
    const coffeeRemoved = coffees.filter((coffee) => coffee.id !== id)
    setCoffees(coffeeRemoved)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffeeRemoved))
  }

  return (
    <CoffeeContext.Provider
      value={{ coffees, addToCart, removeFromCart, increment }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)

  return context
}
