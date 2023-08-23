const botao = document.querySelector("#botaoAdicionar");

const listaImportante = document.querySelector("#listaImportante");
const listaNormal = document.querySelector("#listaNormal")

const textInput = document.querySelector("#toDoText");

const checkNormal = document.querySelector("#checkImportante")
const checkImportante = document.querySelector("#checkNormal")


let numeroId = 1

botao.addEventListener('click', () => {
  let tarefa = textInput.value;

  console.log(checkImportante.checked)
  console.log(checkNormal.checked)

  let li = `<li>
            <label for="toDoItem${numeroId}">
                <input type="checkbox" name="" id="toDoItem${numeroId}" /> ${tarefa} 
            </label>
            <span class="iconExcluir" id="toDoExcluir${numeroId}">X</span>
            </li>`;


    listaImportante.innerHTML += li


//Incrementar +1 no id
    numeroId++

//limpar o input
    textInput.value = ""
});
