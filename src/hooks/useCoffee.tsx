import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import {
  addToCartAction,
  decrementAction,
  getApiAction,
  getLocalStorage,
  incrementAction,
  removeFromCartAction,
} from '../reducers/coffees/actions'
import { CoffeeProps, coffeesReducer } from '../reducers/coffees/reducer'

import api from '../services/api'

interface ChildrenType {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: CoffeeProps[]
  coffeesCart: CoffeeProps[]
  addToCart: (coffee: CoffeeProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
}

const CoffeeContext = createContext<CoffeeContextType>({} as CoffeeContextType)

//* ************************************************************************************************

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: [],
    coffeesCart: [],
  })

  const { coffees, coffeesCart } = coffeesState

  useEffect(() => {
    async function loadCoffees(): Promise<void> {
      const storedStateJSON = localStorage.getItem('@Coffee_Delivery:in-cart')
      if (storedStateJSON) {
        dispatch(getLocalStorage(storedStateJSON))
      }
    }
    loadCoffees()
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState.coffeesCart)
    localStorage.setItem('@Coffee_Delivery:in-cart', stateJSON)
  }, [coffeesState.coffeesCart])

  useEffect(() => {
    async function loadCoffees() {
      try {
        const response = await api.get('/coffees')
        dispatch(getApiAction(response))
      } catch (e) {
        console.log(e)
      }
    }
    loadCoffees()
  }, [dispatch])

  function addToCart(coffee: CoffeeProps) {
    dispatch(addToCartAction(coffee))
  }

  function increment(id: number) {
    dispatch(incrementAction(id))
  }

  function decrement(id: number) {
    dispatch(decrementAction(id))
  }

  function removeFromCart(id: number) {
    dispatch(removeFromCartAction(id))
  }

  //* ************************************************************************************************

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
