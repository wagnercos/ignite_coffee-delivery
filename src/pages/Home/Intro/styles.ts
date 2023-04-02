import styled from 'styled-components'

import backgroundImg from '../../../assets/background.png'

export const IntroContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 34rem;
  display: flex;
  justify-content: center;
`

export const HeroBanner = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  align-items: center;
  grid-gap: 3.5rem;
  max-width: 70rem;
  width: 100%;
  overflow: hidden;

  & img {
    justify-self: end;
    width: 27rem;
    height: auto;
  }
`

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    margin-top: 1rem;
  }

  & ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;

    & li {
      width: 20rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

const ICONS_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface IconsProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const IconStyled = styled.div<IconsProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
