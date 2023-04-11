import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`
export const CoffeeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
