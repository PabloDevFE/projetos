//1 - pegar o input e validar 
//2 - é importante ou normal 
//3 - adicionar na lista equivalente

const inputText = document.querySelector("#toDoText")
const button = document.querySelector("#botaoAdicionar")

class Item {
  constructor(text, importancia) {
    this.text = text 
    if(text.length < 1) {
      text = ""
      alert("Valor invalido")
    } 
    //faz a verificação do texto que o li vai receber

    this.importancia = importancia
  }

  createLi(importancia) {
    //vai pegar a importancia e criar o li
  }


}


button.addEventListener('click', () => {
  setImportance()
  let newItem = new Item(inputText.value, )


  inputText.value = ""
})

