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

interface CoffeesState {
  coffees: CoffeeProps[]
  coffeesCart: CoffeeProps[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_API: {
      return produce(state, (draft) => {
        draft.coffees = action.payload.map((coffee: CoffeeProps) => ({
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
      })
    }

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
      const coffeeIndex = state.coffees.findIndex(
        (c: CoffeeProps) => c.id === action.payload.id,
      )
      if (coffeeIndex === -1) {
        console.error(`Coffee with ID ${action.payload.id} not found`)
        return state
      }
      const updatedCoffee = {
        ...state.coffees[coffeeIndex],
        quantity: state.coffees[coffeeIndex].quantity! + 1,
      }

      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1, updatedCoffee)
        if (state.coffeesCart) {
          draft.coffeesCart.splice(coffeeIndex, 1, updatedCoffee)
        }
      })
    }

    case ActionTypes.DECREMENT: {
      const coffeeIndex = state.coffees.findIndex(
        (c: CoffeeProps) => c.id === action.payload.id,
      )
      if (coffeeIndex === -1) {
        console.error(`Coffee with ID ${action.payload.id} not found`)
        return state
      }
      const updatedCoffee = {
        ...state.coffees[coffeeIndex],
        quantity: state.coffees[coffeeIndex].quantity! - 1,
      }

      if (updatedCoffee.quantity >= 1) {
        return produce(state, (draft) => {
          draft.coffees.splice(coffeeIndex, 1, updatedCoffee)
          if (state.coffeesCart) {
            draft.coffeesCart.splice(coffeeIndex, 1, updatedCoffee)
          }
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

    default:
      return state
  }
}
