import styled from 'styled-components'

export const CounterContainer = styled.div`
  height: 2.35rem;

  & input[type='number'] {
    width: 3rem;
    height: 100%;
    border: 0;
    background-color: ${(props) => props.theme['base-button']};
    text-align: center;
    pointer-events: none;

    &::placeholder {
      color: ${(props) => props.theme['base-title']};
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:disabled::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const BaseButtonInput = styled.button`
  height: inherit;
  border: 0;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:disabled {
    color: ${(props) => props.theme['base-label']};
    cursor: default;
  }
`

export const ButtonIncrease = styled(BaseButtonInput)`
  border-radius: 0 6px 6px 0;
  padding-right: 0.5rem;
`
export const ButtonDecrease = styled(BaseButtonInput)`
  border-radius: 6px 0 0 6px;
  padding-left: 0.5rem;
`
