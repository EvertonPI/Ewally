import { useEffect, useState } from "react";

import { TOKEN } from "database/storage";
import api from "services/api";

import { Button, Card, Table } from "react-bootstrap";
import Moment from "react-moment";
import styles from "./table.module.css";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

export default function TableMain() {
  const [statements, setStatements] = useState([]);
  const [informations, setInformations] = useState(false);

  const responseToken = localStorage.getItem(TOKEN);
  const token =
    responseToken !== null ? JSON.parse(responseToken) : 'navigate("/")';
  useEffect(() => {
    balanceAccount();
  });
  const balanceAccount = async () => {
    const initialDate = "2021-01-01";
    const finalDate = "2022-03-20";
    const response = await api.get(
      `account/statements?initialDate=${initialDate}&finalDate=${finalDate}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { statement } = response.data;
    setStatements(statement);
    console.log(statement, "aqui");
  };

  return (
    <div className={styles.container}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Operação</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {statements.map(
            ({ id, amount, createdAt, operationType, otherInfo }) => {
              return (
                <tr key={id} style={{ cursor: "pointer" }}>
                  <td>
                    <Moment format="DD/MM/YYYY HH:mm:ss">{createdAt}</Moment>
                  </td>
                  <td>{amount} </td>
                  <td>{operationType} </td>
                  <td>
                    {informations ? (
                      <>
                        <RiArrowDropDownLine
                          size={25}
                          onClick={() => setInformations(false)}
                        />
                        <Card>
                          <p>Nome : {otherInfo.senderFullName}</p>
                          <p>Apelido : {otherInfo.otherNickname}</p>
                          <p>Conta : {otherInfo.senderAccount}</p>
                          <p>Descrição : {otherInfo.description}</p>
                        </Card>
                      </>
                    ) : (
                      <RiArrowDropRightLine
                        size={25}
                        onClick={() => setInformations(true)}
                      />
                    )}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </div>
  );
}
