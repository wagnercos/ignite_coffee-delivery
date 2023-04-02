import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled, { DefaultTheme, ThemeProps } from 'styled-components'

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isScrolled: boolean
}

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  padding: 2rem 0;
  background-color: ${({
    isScrolled,
    theme,
  }: HeaderProps & ThemeProps<DefaultTheme>) =>
    isScrolled ? theme.background : 'transparent'};
  box-shadow: ${({ isScrolled }: HeaderProps) =>
    isScrolled ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none'};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`
export const Nav = styled.nav`
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

export const NavGroup = styled.nav`
  display: flex;
  gap: 0.75rem;
`
export const Locale = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  & svg {
    color: ${(props) => props.theme.purple};
  }

  & p {
    color: ${(props) => props.theme['purple-dark']};
    line-height: 1.3;
    font-size: 0.875rem;
  }
`

export const AmountMarker = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.75rem;
  font-weight: bold;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  position: relative;

  & a {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
    }
  }
`
