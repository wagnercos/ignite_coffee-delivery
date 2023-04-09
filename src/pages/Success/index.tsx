import { motion } from 'framer-motion'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import {
  IconStyled,
  LeftContent,
  ListContentStyled,
  SuccessContainer,
  TextHeader,
} from './styles'

import illustration from '../../assets/illustration.svg'

export function Success() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.1 }}
    >
      <SuccessContainer>
        <LeftContent>
          <TextHeader>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </TextHeader>
          <ListContentStyled>
            <li>
              <IconStyled iconColor="purple">
                <MapPin size={16} weight="fill" />
              </IconStyled>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </li>
            <li>
              <IconStyled iconColor="yellow">
                <Timer size={16} weight="fill" />
              </IconStyled>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min </strong>
              </p>
            </li>
            <li>
              <IconStyled iconColor="yellowDark">
                <CurrencyDollar size={16} weight="fill" />
              </IconStyled>
              <p>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito </strong>
              </p>
            </li>
          </ListContentStyled>
        </LeftContent>
        <div>
          <p>
            <img src={illustration} alt="" />
          </p>
        </div>
      </SuccessContainer>
    </motion.div>
  )
}
