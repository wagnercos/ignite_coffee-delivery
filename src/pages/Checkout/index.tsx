import { useCoffee } from '../../hooks/useCoffee'
import { useNavigate } from 'react-router-dom'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { UserDataForm } from './UserDataForm'
import { CoffeeOrderData } from './CoffeeOrderData'

import { CheckoutContainer } from './styles'

const methodPayments = [
  {
    id: 'Cartão de crédito',
    name: 'cartao-credito',
    icon: <CreditCard size={16} />,
  },
  {
    id: 'Cartão de débito',
    name: 'cartao-debito',
    icon: <Bank size={16} />,
  },
  {
    id: 'Dinheiro',
    name: 'dinheiro',
    icon: <Money size={16} />,
  },
]

const newFormValidationShema = z.object({
  cep: z
    .string()
    .regex(/^\d{5}-\d{3}$/)
    .length(9),
  rua: z.string().min(2).max(100),
  numero: z
    .string()
    .regex(/^\d+[A-Za-z]?$/)
    .max(4),
  complemento: z.string().max(50).optional(),
  bairro: z.string().min(2).max(20),
  cidade: z.string().min(2).max(20),
  uf: z.string().length(2),
  pagamento: z
    .string()
    .refine((val) => methodPayments.map((method) => method.id).includes(val)),
})

type NewFormDataType = z.infer<typeof newFormValidationShema>

export function Checkout() {
  const { clearCart, createFormData, coffeesCart } = useCoffee()

  const newForm = useForm<NewFormDataType>({
    resolver: zodResolver(newFormValidationShema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: '',
    },
  })

  const { handleSubmit, watch } = newForm

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<NewFormDataType> = (data) => {
    if (coffeesCart.length > 0) {
      createFormData(data)
      navigate('/success')
      clearCart()
    }
  }

  return (
    <CheckoutContainer>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        transition={{ duration: 0.2 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...newForm}>
            <UserDataForm methodPayments={methodPayments} />
            <CoffeeOrderData />
          </FormProvider>
        </form>
      </motion.div>
    </CheckoutContainer>
  )
}
