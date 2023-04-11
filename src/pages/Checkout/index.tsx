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
    id: 'CREDIT',
    name: 'cartao-credito',
    icon: <CreditCard size={16} />,
    description: 'Cartão de crédito',
  },
  {
    id: 'DEBIT',
    name: 'cartao-debito',
    icon: <Bank size={16} />,
    description: 'Cartão de crédito',
  },
  {
    id: 'CASH',
    name: 'dinheiro',
    icon: <Money size={16} />,
    description: 'Cartão de crédito',
  },
]

const newFormValidationShema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/),
  rua: z.string().min(2).max(100),
  numero: z
    .string()
    .regex(/^\d+[A-Za-z]?$/)
    .max(4),
  complemento: z.string().min(2).max(100).optional(),
  bairro: z.string().min(2).max(20),
  cidade: z.string().min(2).max(20),
  uf: z.string().max(2),
  pagamento: z
    .string()
    .refine((val) => methodPayments.map((method) => method.id).includes(val)),
})

type NewFormDataType = z.infer<typeof newFormValidationShema>

export function Checkout() {
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

  const { handleSubmit } = newForm

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<NewFormDataType> = (data) => {
    navigate('/success')
    console.log(data)
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
