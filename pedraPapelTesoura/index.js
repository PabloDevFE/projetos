const opcoes = document.querySelectorAll('.options')
const exibir = document.querySelector('#resultAnteriorEmoji')

let idOpcao
let escolhaRandom 
let resultado = document.querySelector('#resultado')

let selecionado = document.querySelector('#selecionado')

opcoes.forEach(opcao => {
    opcao.addEventListener('mouseenter', () => {
        //selecionar a opção e atribuir o valor a variavel idOpcao
        const opcaoEscolhida = document.querySelector('.selecionado')
        opcaoEscolhida.classList.remove('selecionado')
        opcao.classList.add('selecionado')
        idOpcao = opcao.attributes.id.value;

        emoji()
    })
})



function emoji() {
    if (idOpcao == "tesoura") {
        selecionado.innerHTML = "✌️"
    } else if (idOpcao == "papel") {
        selecionado.innerHTML = "🖐️"
    } else if (idOpcao == "pedra") {
        selecionado.innerHTML = "✊"
    }
}

function randomize() {
    const randomNumber = Math.floor(Math.random() * 9) + 1
    if (randomNumber == 1 || randomNumber == 4 || randomNumber == 7) {
        escolhaRandom = "papel"
        selecionadoMaq.innerHTML = "🖐️"
    } else if (randomNumber == 2 || randomNumber == 5 || randomNumber == 8) {
        escolhaRandom = "tesoura"
        selecionadoMaq.innerHTML = "✌️"
    } else if (randomNumber == 3 || randomNumber == 6 || randomNumber == 9) {
        escolhaRandom = "pedra"
        selecionadoMaq.innerHTML = "✊"
    }
}

function result() {
    //analisar o resultado
    if (idOpcao == "pedra" && escolhaRandom == "papel") {
        resultado.innerText = "Você perdeu!"
    } else if (idOpcao == "papel" && escolhaRandom == "tesoura") {
        resultado.innerText = "Você perdeu!"
    } else if (idOpcao == "tesoura" && escolhaRandom == "pedra") {
        resultado.innerText = "Você perdeu!"
    } else if (idOpcao == "pedra" && escolhaRandom == "tesoura") {
        resultado.innerText = "Você ganhou!"
    } else if (idOpcao == "tesoura" && escolhaRandom == "papel") {
        resultado.innerText = "Você ganhou!"
    } else if (idOpcao == "papel" && escolhaRandom == "pedra") {
        resultado.innerText = "Você ganhou!"
    } else {
        resultado.innerText = "Empate!"
    }


    //colocar o resultado e a jogada 
    exibir.innerHTML = selecionado.innerHTML



    //limpar o resultado
}

function esconder() {
    let divResultAnterior = document.querySelector("#resultAnterior")
    divResultAnterior.classList.add('hide')
}

function play() {
    randomize()

    result()

    let divResultAnterior = document.querySelector("#resultAnterior")
    divResultAnterior.classList.remove('hide')



    console.log(idOpcao)
    console.log(escolhaRandom)
}