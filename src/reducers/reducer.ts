import { produce } from 'immer'

import { ActionTypes } from './actions'

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

export interface FormDataProps {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

interface CoffeesState {
  coffeesCart: CoffeeProps[]
  formData: FormDataProps
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_LOCALSTORAGE: {
      const getLocalStorage = [...JSON.parse(action.payload)]
      if (state.coffeesCart.length === 0) {
        return produce(state, (draft) => {
          draft.coffeesCart = getLocalStorage
        })
      }
      return state
    }

    case ActionTypes.ADD_TO_CART: {
      const isCoffeeExist = state.coffeesCart.find(
        (c: CoffeeProps) => c.id === action.payload.id,
      )
      if (!isCoffeeExist) {
        return produce(state, (draft) => {
          draft.coffeesCart.push(action.payload)
        })
      }
      return state
    }

    case ActionTypes.INCREMENT: {
      const coffeeIndex = state.coffeesCart.findIndex(
        (c) => c.id === action.payload.id,
      )
      if (coffeeIndex === -1) {
        console.log(`Couldn't find ID ${coffeeIndex}`)
        return state
      }

      const updatedCoffee = {
        ...state.coffeesCart[coffeeIndex],
        quantity: state.coffeesCart[coffeeIndex].quantity + 1,
      }

      return produce(state, (draft) => {
        draft.coffeesCart[coffeeIndex] = updatedCoffee
        localStorage.setItem(
          '@Coffee_Delivery:cart',
          JSON.stringify([...state.coffeesCart, updatedCoffee]),
        )
      })
    }

    case ActionTypes.DECREMENT: {
      const coffeeIndex = state.coffeesCart.findIndex(
        (c) => c.id === action.payload.id,
      )
      if (coffeeIndex === -1) {
        console.log(`Couldn't find ID ${coffeeIndex}`)
        return state
      }

      const updatedCoffee = {
        ...state.coffeesCart[coffeeIndex],
        quantity: state.coffeesCart[coffeeIndex].quantity - 1,
      }

      if (updatedCoffee.quantity >= 1) {
        return produce(state, (draft) => {
          draft.coffeesCart[coffeeIndex] = updatedCoffee
          localStorage.setItem(
            '@Coffee_Delivery:cart',
            JSON.stringify([...state.coffeesCart, updatedCoffee]),
          )
        })
      }
      return state
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const filteredCoffee = state.coffeesCart.filter(
        (c) => c.id !== action.payload.id,
      )
      return produce(state, (draft) => {
        draft.coffeesCart = filteredCoffee
      })
    }

    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.coffeesCart.length = 0
      })

    case ActionTypes.CREATE_FORM_DATA:
      return produce(state, (draft) => {
        draft.formData = action.payload.data
        localStorage.setItem(
          '@Coffee_Delivery:form-data',
          JSON.stringify(action.payload.data),
        )
      })

    default:
      return state
  }
}
