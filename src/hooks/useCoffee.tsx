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
  quantity: number
}

interface CoffeeContextType {
  coffeesCart: CoffeeAddQuantityProps[]
  quantity: number
  addToCart: (coffee: CoffeeAddQuantityProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
}

const CoffeeContext = createContext<CoffeeContextType>({
  coffeesCart: [],
  quantity: 1,
  addToCart: () => {},
  removeFromCart: () => {},
  increment: () => {},
})

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeeAddQuantityProps[]>([])
  const [quantity, setQuantity] = useState(1)

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
      c.id === id ? { ...c, quantity: c.quantity + 1 } : c,
    )
    const newQuantity = newCoffee.find((c) => c.id === id)
    setQuantity(newQuantity!.quantity)
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
      value={{ coffeesCart, addToCart, removeFromCart, quantity, increment }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)

  return context
}
