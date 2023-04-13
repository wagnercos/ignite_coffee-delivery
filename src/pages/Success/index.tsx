import { useContext } from "react";
import { motion } from "framer-motion";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { CoffeeContext } from "../../context/CoffeeContext";

import {
  IconStyled,
  LeftContent,
  ListContentStyled,
  SuccessContainer,
  SuccessContentGrided,
  TextHeader,
} from "./styles";

import illustration from "../../assets/illustration.svg";

export function Success() {
  const { formData } = useContext(CoffeeContext);

  return (
    <SuccessContainer>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        transition={{ duration: 0.1 }}
      >
        <SuccessContentGrided>
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
                  Entrega em{" "}
                  <strong>
                    {formData.rua}, {formData.numero}
                  </strong>{" "}
                  <br />
                  {formData.bairro} - {formData.cidade}, {formData.uf}
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
                  <strong>{formData.pagamento}</strong>
                </p>
              </li>
            </ListContentStyled>
          </LeftContent>
          <div>
            <p>
              <img src={illustration} alt="" />
            </p>
          </div>
        </SuccessContentGrided>
      </motion.div>
    </SuccessContainer>
  );
}
