import styled from 'styled-components'

export const LargeCardContainer = styled.div`
  height: 19rem;
  width: 18rem;
  background-color: ${(props) => props.theme['base-card']};
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  & img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: -24px;
  }
`

export const TagList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & li {
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0 2rem 0;

  & p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const FooterCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Price = styled.div`
  & span {
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }

  & strong {
    font-weight: 800;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const AmountSetting = styled.div`
  height: 2.35rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonAddToCart = styled.button`
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
