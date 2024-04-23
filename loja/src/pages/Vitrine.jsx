import React from "react";
import Navegacao from "../components/Navegacao";
import Principal from "../components/Principal";
import ProdutosExemplo from "../data/ProdutosExemplo";

export default function Vitrine(){
  return <>
    <Navegacao titulo="VITRINE">
      <a href="/"> Inicio </a>
      <a href="/produto/1234"> Promocao </a>
      <a href="/carrinho"> Carrinho </a>
    </Navegacao>
    
    <Principal produtos={ ProdutosExemplo }/>
    
  </>
}