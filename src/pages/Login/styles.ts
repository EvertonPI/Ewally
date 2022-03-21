import styled from "styled-components";
import { theme } from "styles/global";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${theme.color.backgroundLogin};
`;

export const Content = styled.form`
  max-width: 600px;
  width: 85%;
  height: 330px;
  border-radius: 2rem;
  position: fixed;
  background-color: ${theme.color.formLogin};
  box-shadow: 0 0 1rem rgb(35, 50, 95);

  @media (max-width: 480px) {
    margin-top: -5rem;
  }
`;
export const Input = styled.input`
  height: 2.3rem;
  margin-top: 3.2rem;
  width: 90%;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.1rem;
  outline: none;
  border: none;
`;
export const Separation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ResetLogin = styled.a`
  color: ${theme.color.alert};
  font-size: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 3rem;
  margin-right: 1rem;
  cursor: pointer;

  /* @media (max-width: 480px) {
    margin-top: 1.2rem;
  } */
`;
export const ButtonLogin = styled.button`
  width: 7rem;
  height: 3rem;
  background: ${theme.color.ternaria};
  color: ${theme.color.white};
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 550;
  text-align: center;
  margin-top: 1.5rem;
  cursor: pointer;
  border: none;
  :hover {
    background-color: ${theme.color.white};
    color: ${theme.color.second};
  }
`;
