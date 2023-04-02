import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { CoffeeProps } from '../pages/Home/CoffeeList/ index'

interface ChildrenType {
  children: React.ReactNode
}

export interface CoffeeItem extends CoffeeProps {
  quantity: number
}

interface CoffeeContextType {
  coffees: CoffeeItem[]
  // addToCart: (coffee: Omit<CoffeeProps, 'quantity'>) => void
  addToCart: (coffee: CoffeeProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
}

const CoffeeContext = createContext<CoffeeContextType | null>(null)

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffees, setCoffees] = useState<CoffeeItem[]>([])

  useEffect(() => {
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(coffees))
  }, [coffees])

  const addToCart = useCallback(
    (coffee: CoffeeProps) => {
      const coffeeExist = coffees.find((c) => c.id === coffee.id)
      if (coffeeExist) {
        coffeeExist.quantity += 1
        setCoffees((state) => [...state])
      } else {
        setCoffees((state) => [...state, { ...coffee, quantity: 1 }])
      }
    },
    [coffees],
  )

  const increment = useCallback(
    (id: number) => {
      const coffeeExist = coffees.find((c) => c.id === id)

      if (coffeeExist && coffeeExist.quantity === 0) {
        setCoffees(
          coffees.map((coffee) =>
            coffee.id === id
              ? { ...coffee, quantity: coffee.quantity + 1 }
              : coffee,
          ),
        )
      }
    },
    [coffees],
  )

  const removeFromCart = useCallback(
    (id: number) => {
      const coffeeRemoved = coffees.filter((c) => c.id !== id)
      setCoffees(coffeeRemoved)
    },
    [coffees],
  )

  const value = useMemo(
    () => ({ coffees, addToCart, removeFromCart, increment }),
    [coffees, addToCart, removeFromCart, increment],
  )

  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)

  return context
}
