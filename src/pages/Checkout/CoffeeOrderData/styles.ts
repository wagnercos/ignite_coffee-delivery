import styled from 'styled-components'

export const CoffeeOrderDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OrderedCoffees = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`
export const Separator = styled.div`
  content: '';
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  width: 100%;
`
export const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`
export const BasePaymentValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p:first-of-type {
    font-size: 0.875rem;
  }
`

export const ItensTotal = styled(BasePaymentValues)``

export const DeliveryFee = styled(BasePaymentValues)``

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h3 {
    font-family: 'Robot', sans-serif !important;
  }
`

export const ButtonConfirmation = styled.button`
  width: 100%;
  height: 2.875rem;
  background-color: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
