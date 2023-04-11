import { CoffeeProps } from './reducer'

export enum ActionTypes {
  GET_LOCALSTORAGE = 'GET_LOCALSTORAGE',
  ADD_TO_CART = 'ADD_TO_CART',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function getLocalStorage(storedStateJSON: string) {
  return {
    type: ActionTypes.GET_LOCALSTORAGE,
    payload: storedStateJSON,
  }
}

export function addToCartAction(coffee: CoffeeProps) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: coffee,
  }
}

export function incrementAction(id: number) {
  return {
    type: ActionTypes.INCREMENT,
    payload: { id },
  }
}

export function decrementAction(id: number) {
  return {
    type: ActionTypes.DECREMENT,
    payload: { id },
  }
}

// export function updateQuantity(id: number) {
//   return {
//     type: ActionTypes.INCREMENT | ActionTypes.DECREMENT,
//     payload: { id },
//   }
// }

export function removeFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id },
  }
}
