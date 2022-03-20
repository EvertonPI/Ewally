import styled from "styled-components";
import { theme } from "styles/global";

interface propsBalance {
  color: string | boolean | any;
}
export const Container = styled.div`
  display: flex;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.backgroundStatement};

  @media (max-width: 800px) {
    padding-bottom: 2rem;
  }
  @media (max-width: 500px) {
    padding-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 1300px;
  margin-top: 3rem;

  @media (max-width: 800px) {
    width: 90%;
    max-width: 748px;
  }
  @media (max-width: 500px) {
    width: 90%;
    margin-top: 2rem;
    max-width: 438px;
  }
  @media (max-width: 400px) {
    width: 90%;
    margin-left: 0.5rem;
    max-width: 340px;
  }
  @media (max-width: 350px) {
    width: 90%;
    max-width: 310px;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;
export const BackgrounBalance = styled.div<propsBalance>`
  display: flex;
  flex-direction: column;
  width: 98%;
  margin-left: 1rem;
  padding: 1.3rem;
  background-color: ${theme.color.white};

  .balance {
    color: ${({ color }) =>
      color ? theme.color.balancePositive : theme.color.alert};
    font-weight: 600;
  }

  @media (max-width: 800px) {
    width: 96%;
    margin-left: 0.9rem;
    padding: 1rem;
  }
  @media (max-width: 500px) {
    width: 93%;
    margin-left: 0.7rem;
    padding: 0.8rem;
  }
`;
export const TitleBalance = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const BalanceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: transparent;
    color: ${theme.color.balancePositive};
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #c1c1c1;
  width: 98%;
  margin-left: 1rem;

  @media (max-width: 800px) {
    width: 96%;
    margin-left: 0.9rem;
  }
  @media (max-width: 500px) {
    margin-left: 0.7rem;
    width: 93%;
  }
`;
