const botao = document.querySelector("#botaoAdicionar");

const listaImportante = document.querySelector("#listaImportante");
const listaNormal = document.querySelector("#listaNormal");
const listaFeita = document.querySelector("#listaFeito");

const textInput = document.querySelector("#toDoText");

const checkNormal = document.querySelector("#checkImportante");
const checkImportante = document.querySelector("#checkNormal");

let numeroId = 1;
let importancia = 0;

// variavel que vai receber o array com todos os li
let toDoItens;

botao.addEventListener("click", () => {
  //pega o innput
  let tarefa = textInput.value;

  //estrutura dos novos li
  let li = `<li class="liItem" id="item${numeroId}">
  <label for="toDoItem${numeroId}">
      <input type="checkbox" class="checkbox" name="" id="toDoItem${numeroId}"/> ${tarefa} 
  </label>
  <span class="iconExcluir" id="toDoExcluir${numeroId}">X</span>
  </li>`;

  //faz a verificação se o LI está vazio (função anonima)
  if (tarefa.length < 1) {
    li = "";
    alert("Vazio ou muito curto");
    return li;
  } else {
    //Incrementa +1 no id
    numeroId++;
  }

  setImportancia(li);

  //limpar o input
  textInput.value = "";

  toDoItens = document.querySelectorAll(".liItem");

  toDoItens.forEach((item) => {
    item.addEventListener("click", () => {
      var check = document.getElementById(item.id);

      console.log(`excluir elemento ${item.id}`);
    });
  });
});

function setImportancia(li) {
  //o checked por algum motivo devolve false quando tá marcado
  if (checkImportante.checked == true) {
    importancia = 0;
    // 0 = NORMAL
    listaNormal.innerHTML += li;
  } else {
    importancia = 1;
    // 1 = IMPORTANTE
    listaImportante.innerHTML += li;
  }
}
