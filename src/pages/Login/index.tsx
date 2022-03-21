import { TOKEN } from "database/storage";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "services/api";

import {
  ButtonLogin,
  Container,
  Content,
  Input,
  ResetLogin,
  Separation,
} from "./styles";

export default function Form() {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlerLoging = async () => {
    const data = {
      username: userLogin,
      password: password,
    };
    try {
      const login = await api.post("user/login", data);
      const { token } = login.data;
      localStorage.setItem(TOKEN, JSON.stringify(token));
      navigate("/Account");
      setUserLogin("");
      setPassword("");
    } catch (error) {
      alert("Por favor confira seu usuario e senha.");
      console.log(error, "erro de Login");
    }
  };
  return (
    <Container>
      <Content>
        <Separation>
          <Input
            placeholder="Seu Login"
            value={userLogin}
            onChange={e => setUserLogin(e.target.value)}
          />
        </Separation>
        <Separation>
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Separation>
        <Separation>
          <ButtonLogin type="button" onClick={handlerLoging}>
            Entrar
          </ButtonLogin>
        </Separation>
        <ResetLogin>Esqueceu a senha</ResetLogin>
      </Content>
    </Container>
  );
}
