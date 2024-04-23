import react, { useEffect, useState } from "react";
import Navegacao from "../components/Navegacao";
import ProdutosExemplo from "../data/ProdutosExemplo";
import Janela from "../components/Janela";
import ObterCarrinho from "../function/ObterCarrinho";//paramos aqui
import Rodape from "../components/Rodape";
import ExcluirCarrinho from "../function/ExcluirCarrinho";
//lembrar de criar um componente rodape

export default function Carrinho(){
  const [carrinho, definirCarrinho] = useState([]);
  const [preco, definirPreco] = useState(0);

  useEffect(function(){
    const resultado = ObterCarrinho()

    definirCarrinho(resultado)
  },[])

  useEffect(function() {
    var total = 0
    carrinho.map(function(codigo){
      for (const produto of ProdutosExemplo){
        if (produto.codigo == codigo)
          total += parseInt(produto.preco)
      }
    })
    definirPreco(total)
  },[carrinho])

  return<>
    <Navegacao titulo="TurboMarket">
        <a href= "/"> Inicio </a>
        <a href= "/promocao"> Promoção </a>
        <a href= "/carrinho"> Carrinho </a>
    </Navegacao>

    <Janela>
      <table width="100%">
        <tbody>
          {
            carrinho.map(function(codigo, indice){
              for(const produto of ProdutosExemplo){
                if (produto.codigo == codigo)
                  return <tr key={indice}>
                    <td>{produto.codigo}</td>
                    <td>{produto.modelo}</td>
                    <td>{produto.preco},00</td>
                  </tr>
              }
            })
          }
        </tbody>
      </table>
      <h1>Total R${ preco },00</h1>
      <button onClick={(indice) => ExcluirCarrinho()}>Excluir carrinho</button>
    </Janela>
    <Rodape></Rodape>
  </>
}