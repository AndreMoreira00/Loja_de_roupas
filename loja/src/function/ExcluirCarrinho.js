export default function ExcluirCarrinho(codigo){
  const resultado = localStorage.getItem("carrinho")

  const lista = JSON.parse(resultado || "[]")

  lista.splice(codigo)

  const carrinho = JSON.stringify(lista)
  localStorage.setItem("carrinho", carrinho)
  window.location.reload()
}