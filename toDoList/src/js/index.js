const botao = document.querySelector("#botaoAdicionar")
const listaImportante = document.querySelector("#listaImportante")

let criarLi = document.createElement("li")

botao.addEventListener('click', () => {
    criarLi.innerText = "novo li"
    console.log("clicou")
    listaImportante.appendChild(criarLi)
})