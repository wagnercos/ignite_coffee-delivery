import { useContext, useEffect, useState } from "react";

import { LargeCard } from "../../../components/LargeCard";
import { CoffeeContext } from "../../../context/CoffeeContext";
import { CoffeeProps } from "../../../reducers/reducer";

import api from "../../../services/api";

import { CoffeeListContainer, CoffeeContent } from "./styles";

export function CoffeeList() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);
  const { addToCart } = useContext(CoffeeContext);

  useEffect(() => {
    async function loadCoffees() {
      try {
        const response = await api.get("/coffees");
        const data = response.data.map((coffee: CoffeeProps) => ({
          ...coffee,
          quantity: 1,
        }));
        setCoffees(data);
      } catch (e) {
        console.log(e);
      }
    }
    loadCoffees();
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(coffees);
    localStorage.setItem("@Coffee_Delivery:coffees", stateJSON);
  }, [coffees]);

  function handleAddToCart(coffee: CoffeeProps) {
    addToCart(coffee);
  }

  function renderCoffee(coffee: CoffeeProps) {
    return (
      <LargeCard
        key={coffee.id}
        coffee={coffee}
        onAddToCart={() => handleAddToCart(coffee)}
      />
    );
  }

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeContent>{coffees.map(renderCoffee)}</CoffeeContent>
    </CoffeeListContainer>
  );
}
