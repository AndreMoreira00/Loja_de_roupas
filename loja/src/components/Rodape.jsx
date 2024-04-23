import react from "react";
import styled from "styled-components";

const Menu = styled.div`
    display: block;
    background: gray;
    padding: 8px;
    width: 100%;
    color: black;
    text-align: center;
    height: 100%;
`
const Sect = styled.div`
    display: inline-block;
    align-content: start;
    margin: 15px;
    padding: 5px;
    whidth: 20%;
    background: #8C8C8C;
`

export default function(){
  return <Menu>
    <h2>TurboMaker</h2>
    <Sect>
      <p>SOBRE:</p>
      <p>Nosso site está relacionado a moda</p>
    </Sect>
    <Sect>
      <p>PAGAMENTOS:</p>
      <p>Aceitamos todas as formas de pagamento</p>
    </Sect>
    <Sect>
      <p>PARCEIROS:</p>
      <p>Shein / Renner / C&A </p>
    </Sect>
    <Sect>
      <p>REGULAMENTOS:</p>
      <p>Se seu produto não chegar temos devolução</p>
    </Sect>
  </Menu>
}