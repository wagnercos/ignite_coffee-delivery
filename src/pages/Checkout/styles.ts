import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  width: 100%;
  margin-top: 2.5rem;

  & form {
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-gap: 2rem;
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    & form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
