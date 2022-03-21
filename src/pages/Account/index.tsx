import React, { useEffect, useState } from "react";
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
import api from "services/api";
import { TOKEN } from "database/storage";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const [visibleBalance, setVisibleBalance] = useState(false);
  const [balance, setBalance] = useState(Number);

  const responseToken = localStorage.getItem(TOKEN);
  const token =
    responseToken !== null ? JSON.parse(responseToken) : navigate("/");
  useEffect(() => {
    balanceAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const balanceAccount = async () => {
    const response = await api.get("account/balance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { balance } = response.data;

    setBalance(balance);
  };

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
