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
  clearCartAction,
  createFormDataAction,
} from '../reducers/coffees/actions'
import {
  CoffeeProps,
  coffeesReducer,
  FormDataProps,
} from '../reducers/coffees/reducer'

interface ChildrenType {
  children: ReactNode
}

interface CoffeeContextType {
  coffeesCart: CoffeeProps[]
  formData: FormDataProps
  addToCart: (coffee: CoffeeProps) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
  clearCart: () => void
  createFormData: (data: FormDataProps) => void
}

const CoffeeContext = createContext({} as CoffeeContextType)

//* ************************************************************************************************

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffeesCart: [],
    formData: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: '',
    },
  })

  const { coffeesCart, formData } = coffeesState

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

  function clearCart() {
    dispatch(clearCartAction())
  }

  function createFormData(data: FormDataProps) {
    dispatch(createFormDataAction(data))
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
        clearCart,
        createFormData,
        formData,
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
