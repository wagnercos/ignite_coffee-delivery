import styled from 'styled-components'

export const SmallCardContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & img {
    width: 4rem;
    height: 4rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonDelete = styled.button`
  height: 2.35rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease-in-out;

  & svg {
    color: ${(props) => props.theme.purple};
  }

  & span {
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
