import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { CoffeeContext } from "../../context/CoffeeContext";
import { FormDataProps } from "../../reducers/reducer";

import {
  HeaderContainer,
  Nav,
  NavGroup,
  Locale,
  AmountMarker,
  Wrapper,
} from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  const [city, setCity] = useState<FormDataProps>();
  const [isScrolled, setIsScrolled] = useState(false);

  const { coffeesCart } = useContext(CoffeeContext);

  useEffect(() => {
    async function loadCity(): Promise<void> {
      const getStorage = localStorage.getItem("@Coffee_Delivery:form-data");
      if (getStorage) {
        setCity({ ...JSON.parse(getStorage) });
      }
    }
    loadCity();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  const coffeesSelected = coffeesCart.length;

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <NavGroup>
          <Locale>
            <MapPin size={22} weight="fill" />
            <p>{city?.cidade}</p>
          </Locale>
          <Wrapper>
            {coffeesCart.length > 0 && (
              <AmountMarker>{coffeesSelected}</AmountMarker>
            )}
            <NavLink to="/checkout" title="Sacola de compras">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </Wrapper>
        </NavGroup>
      </Nav>
    </HeaderContainer>
  );
}
