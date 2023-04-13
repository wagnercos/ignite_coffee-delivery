import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  addToCartAction,
  clearCartAction,
  createFormDataAction,
  decrementAction,
  getLocalStorage,
  incrementAction,
  removeFromCartAction,
} from "../reducers/actions";
import {
  CoffeeProps,
  coffeesReducer,
  FormDataProps,
} from "../reducers/reducer";

interface ChildrenType {
  children: ReactNode;
}

interface CoffeeContextType {
  coffeesCart: CoffeeProps[];
  formData: FormDataProps;
  addToCart: (coffee: CoffeeProps) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
  createFormData: (data: FormDataProps) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeProvider({ children }: ChildrenType) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffeesCart: [],
    formData: {} as FormDataProps,
  });

  const { coffeesCart, formData } = coffeesState;

  useEffect(() => {
    async function loadCoffees(): Promise<void> {
      const storedStateJSON = localStorage.getItem("@Coffee_Delivery:cart");
      if (storedStateJSON) {
        dispatch(getLocalStorage(storedStateJSON));
      }
    }
    loadCoffees();
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesCart);
    localStorage.setItem("@Coffee_Delivery:cart", stateJSON);
  }, [coffeesCart]);

  function addToCart(coffee: CoffeeProps) {
    dispatch(addToCartAction(coffee));
  }

  function increment(id: number) {
    dispatch(incrementAction(id));
  }

  function decrement(id: number) {
    dispatch(decrementAction(id));
  }

  function removeFromCart(id: number) {
    dispatch(removeFromCartAction(id));
  }

  function clearCart() {
    dispatch(clearCartAction());
  }

  function createFormData(data: FormDataProps) {
    dispatch(createFormDataAction(data));
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeesCart,
        formData,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        clearCart,
        createFormData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
