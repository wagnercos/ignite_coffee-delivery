import styled from 'styled-components'

export const UserDataFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const BaseInfo = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`
export const AddressInfo = styled(BaseInfo)``

export const PaymentMethodInfo = styled(BaseInfo)``

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  & p {
    line-height: 1.5;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & span {
    line-height: 1.3;
    font-size: 0.875rem;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  & input {
    height: 2.625rem;
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
    }
  }

  & .input-group-1 {
    display: grid;
    grid-template-columns: 2fr 2fr 0.5fr;
    grid-gap: 0.75rem;

    @media (max-width: 768px) {
      grid-template-columns: 2fr 2fr 1fr;
    }
  }

  & .input-group-2 {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 0.75rem;

    @media (max-width: 768px) {
      grid-template-columns: 2fr 4fr;
    }
  }
`

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  & label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    width: 100%;
    background: ${(props) => props.theme['base-button']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;
    position: relative;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    & span {
      font-size: 0.75rem;
      text-transform: uppercase;
      line-height: 1.6;
      color: ${(props) => props.theme['base-text']};
      z-index: 10;
    }

    & svg {
      color: ${(props) => props.theme.purple};
      z-index: 10;
    }

    & input[type='radio'] {
      //display: none;
      all: unset;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      border: 1px solid ${(props) => props.theme['base-hover']};
    }

    & input[type='radio']:checked {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
      border-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
