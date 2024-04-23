import react from "react";
import Navegacao from "../components/Navegacao";
import Exibidor from "../components/Exibidor";
import ProdutosExemplo from "../data/ProdutosExemplo";
import { useParams } from "react-router-dom";

export default function Produto(){
  const {codigo} = useParams()
  return<>
    <Navegacao titulo="TurboMarket">
      <a href= "/"> Inicio </a>
      <a href= "/promocao"> Promoção </a>
      <a href= "/carrinho"> Carrinho </a>
    </Navegacao>
    <Exibidor produto ={ProdutosExemplo.find((produto) => produto.codigo == codigo)}/>
  </>
}