import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 70rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: end;
  margin-top: 5rem;

  & img {
  }
`
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TextHeader = styled.div`
  & h2 {
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  & > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`

export const ListContentStyled = styled.ul`
  list-style: none;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #c47f17, #8047f8) border-box;
  border: 1px solid transparent;

  & li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:not(:first-child) {
      margin-top: 2rem;
    }

    & > p {
      line-height: 1.3;
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
