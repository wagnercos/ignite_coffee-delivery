import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import {
  addToCartAction,
  getLocalStorage,
  incrementAction,
  decrementAction,
  removeFromCartAction,
} from '../reducers/coffees/actions'
import { CoffeeProps, coffeesReducer } from '../reducers/coffees/reducer'

interface ChildrenType {
  children: ReactNode
}

interface CoffeeContextType {
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
    coffeesCart: [],
  })

  const { coffeesCart } = coffeesState

  useEffect(() => {
    async function loadCoffees(): Promise<void> {
      const storedStateJSON = localStorage.getItem('@Coffee_Delivery:cart')
      if (storedStateJSON) {
        dispatch(getLocalStorage(storedStateJSON))
      }
    }
    loadCoffees()
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesCart)
    localStorage.setItem('@Coffee_Delivery:cart', stateJSON)
  }, [coffeesCart])

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
