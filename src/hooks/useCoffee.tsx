import React, { createContext, useContext, useEffect, useState } from 'react'

interface ChildrenType {
  children: React.ReactNode
}

interface CoffeeType extends Array<string> {}

export interface CoffeeProps {
  id: number
  title?: string
  type?: CoffeeType
  price?: number
  description?: string
  image?: string
}

export interface CoffeeAddQuantityProps extends CoffeeProps {
  quantity?: number
}

interface CoffeeContextType {
  coffeesCart: CoffeeAddQuantityProps[]
  addToCart: (coffee: CoffeeAddQuantityProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
}

const CoffeeContext = createContext<CoffeeContextType>({
  coffeesCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increment: () => {},
  decrement: () => {},
})

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeeAddQuantityProps[]>([])

  useEffect(() => {
    async function loadCoffees(): Promise<void> {
      const storagedProducts = localStorage.getItem('@CoffeeDelivery')

      if (storagedProducts) {
        setCoffeesCart([...JSON.parse(storagedProducts)])
      }
    }

    loadCoffees()
  }, [])

  function addToCart(coffee: CoffeeAddQuantityProps) {
    const coffeeExist = coffeesCart.find((c) => c.id === coffee.id)
    if (!coffeeExist) {
      setCoffeesCart((state) => [...state, { ...coffee, quantity: 1 }])
      localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffee))
    } else {
      setCoffeesCart((state) => [...state])
    }
  }

  function increment(id: number) {
    const newCoffee = coffeesCart.map((c) =>
      c.id === id ? { ...c, quantity: c.quantity! + 1 } : c,
    )
    setCoffeesCart(newCoffee)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(newCoffee))
  }

  function decrement(id: number) {
    const newCoffee = coffeesCart.map((c) =>
      c.id === id && c.quantity! > 1 ? { ...c, quantity: c.quantity! - 1 } : c,
    )
    setCoffeesCart(newCoffee)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(newCoffee))
  }

  function removeFromCart(id: number) {
    const coffeeRemoved = coffeesCart.filter((coffee) => coffee.id !== id)
    setCoffeesCart(coffeeRemoved)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffeeRemoved))
  }

  return (
    <CoffeeContext.Provider
      value={{
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
