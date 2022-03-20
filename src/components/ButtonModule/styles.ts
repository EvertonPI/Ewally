import styled from "styled-components";
import { theme } from "styles/global";

interface Botao {
  backColor?: string;
  color?: string;
}

export const ButtonModule = styled.button<Botao>`
  background-color: ${props =>
    props.backColor ? theme.color.ternaria : "transparent"};
  color: ${props => (props.color ? theme.color.white : "gray")};
  width: 10rem;
  padding: 0.3rem 1.2rem;
  margin: 1.5rem;
  border: 2px solid ${theme.color.white};
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  outline: 0;

  :hover {
    background-color: ${props =>
      props.backColor ? theme.color.white : "blue"};
    color: ${props => (props.color ? theme.color.second : theme.color.white)};
    border: none;
  }
`;
