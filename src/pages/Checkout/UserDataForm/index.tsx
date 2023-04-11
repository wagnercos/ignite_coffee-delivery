import { Fragment, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import {
  AddressInfo,
  Header,
  InputGroup,
  PaymentMethodInfo,
  RadioGroup,
  UserDataFormContainer,
} from './styles'

interface MethodPaymentsType {
  methodPayments: {
    id: string
    name: string
    icon: ReactNode
  }[]
}

export function UserDataForm({ methodPayments }: MethodPaymentsType) {
  const { register } = useFormContext()

  return (
    <UserDataFormContainer>
      <h4>Complete seu pedido</h4>
      <AddressInfo>
        <Header>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </Header>
        <InputGroup>
          <div className="input-group-1">
            <input
              type="text"
              id="cep"
              placeholder="CEP"
              {...register('cep', { required: true })}
            />
          </div>
          <input
            type="text"
            placeholder="Rua"
            {...register('rua', { required: true })}
          />

          <div className="input-group-2">
            <input
              type="text"
              id="numero"
              placeholder="Número"
              {...register('numero', { maxLength: 4 })}
            />
            <input
              type="text"
              id="complemento"
              placeholder="Complemento"
              {...register('complemento')}
            />
          </div>

          <div className="input-group-1">
            <input
              type="text"
              placeholder="Bairro"
              {...register('bairro', { required: true })}
            />
            <input
              type="text"
              placeholder="Cidade"
              {...register('cidade', { required: true })}
            />
            <input
              type="text"
              placeholder="UF"
              required
              {...register('uf', { required: true })}
            />
          </div>
        </InputGroup>
      </AddressInfo>

      <PaymentMethodInfo>
        <Header>
          <CurrencyDollar size={22} color="#8047F8" />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </Header>
        <RadioGroup>
          {methodPayments.map((method) => (
            <Fragment key={method.id}>
              <label htmlFor={method.name}>
                <input
                  type="radio"
                  id={method.name}
                  value={method.id}
                  {...register('pagamento', { required: true })}
                />
                {method.icon}
                <span>{method.id}</span>
              </label>
            </Fragment>
          ))}
        </RadioGroup>
      </PaymentMethodInfo>
    </UserDataFormContainer>
  )
}
