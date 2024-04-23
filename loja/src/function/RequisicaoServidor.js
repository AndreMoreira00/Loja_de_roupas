import axios from "axios";

function Catalogarproduto(produto){
  return axios({
    method: "POST",
    url: "hhtp://localhost:4000/catalogar",
    data: {
      codigo: produto.codigo,
      marca: produto.marca,
      modelo: produto.modelo,
      preco: produto.preco,
      descricao: produto.descricao,
      imagens: produto.imagens,
      promocao: produto.promocao
    }
  })
} 