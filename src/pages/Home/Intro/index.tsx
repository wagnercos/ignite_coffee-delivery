import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IntroContainer, HeroBanner, TextSide, IconStyled } from './styles'

import imageHero from '../../../assets/imagem.png'

export function Intro() {
  return (
    <IntroContainer>
      <HeroBanner>
        <TextSide>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, <br />a
              qualquer hora.
            </p>
          </div>

          <ul>
            <li>
              <IconStyled iconColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </IconStyled>
              Compra simples e segura
            </li>
            <li>
              <IconStyled iconColor="baseText">
                <Package size={16} weight="fill" />
              </IconStyled>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconStyled iconColor="yellow">
                <Timer size={16} weight="fill" />
              </IconStyled>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconStyled iconColor="purple">
                <Coffee size={16} weight="fill" />
              </IconStyled>
              O café chega fresquinho até você
            </li>
          </ul>
        </TextSide>

        <img src={imageHero} alt="" />
      </HeroBanner>
    </IntroContainer>
  )
}
