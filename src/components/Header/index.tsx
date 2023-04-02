import { useEffect, useState } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCoffee } from '../../hooks/useCoffee'
import {
  HeaderContainer,
  Nav,
  NavGroup,
  Locale,
  AmountMarker,
  Wrapper,
} from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const coffeeContext = useCoffee()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const coffeeSelected = coffeeContext?.coffees.length

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <NavGroup>
          <Locale>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre</p>
          </Locale>
          <Wrapper>
            <AmountMarker>{coffeeSelected}</AmountMarker>
            <NavLink to="/checkout" title="Sacola de compras">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </Wrapper>
        </NavGroup>
      </Nav>
    </HeaderContainer>
  )
}
