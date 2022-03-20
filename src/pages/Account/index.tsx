import React, { useState } from "react";
import {
  BackgrounBalance,
  BalanceIcon,
  Container,
  Content,
  Line,
  Title,
  TitleBalance,
} from "./styles";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Table from "components/Table";
import { theme } from "styles/global";

export default function Account() {
  const [visibleBalance, setVisibleBalance] = useState(false);
  const [balance, setBalance] = useState("3000");
  return (
    <Container>
      <Content>
        <Title>extrato</Title>
        <Line />

        {/* Sinal de +  antes de uma string o javascript entende que é pra transforma string em numero */}
        <BackgrounBalance color={+balance >= 0 ? "color" : ""}>
          <TitleBalance>saldo da conta</TitleBalance>
          <BalanceIcon>
            {visibleBalance ? (
              <>
                <p className="balance">
                  R$ {(Number(balance) / 100).toFixed(2).replace(".", ",")}
                </p>
                <button onClick={() => setVisibleBalance(false)}>
                  <BsEyeSlash size={25} color="#808080" />
                </button>
              </>
            ) : (
              <>
                <p className="balance"> </p>
                <button onClick={() => setVisibleBalance(true)}>
                  <BsEye size={25} color={theme.color.balancePositive} />
                </button>
              </>
            )}
          </BalanceIcon>
        </BackgrounBalance>
        <Line />

        <Table />
      </Content>
    </Container>
  );
}
