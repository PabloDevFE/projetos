const notas = document.querySelectorAll(".nota")
const titulo = document.querySelector("#titulo")
const subTitulo = document.querySelector("#subTitulo")
const divNotas = document.querySelector("#notas")
const botao = document.querySelector("#botao")
const image = document.querySelector("#image")
const text = document.querySelector("#text")



let notaFinal;


notas.forEach( (nota) => {
    nota.addEventListener("click", () =>{
        notaFinal = nota.attributes.id.value;
        console.log(notaFinal)
        selecao(notaFinal)
        return notaFinal;
    })
})

function selecao(notaFinal) {
    const elementos = document.getElementsByClassName("selecionado");

    // Remover a classe "selecionado" de todos os elementos que a possuem
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove("selecionado");
    }
    // Adicionar a classe "selecionado" ao elemento específico
    const exibirNota = document.getElementById(notaFinal);
    exibirNota.classList.add("selecionado");
}


function enviar() {

    subTitulo.classList.toggle("hidden")
    divNotas.classList.toggle("hidden")
    botao.classList.toggle("hidden")
    image.src = "midias/undraw_completed_03xt.svg"

    if (notaFinal == 1) {
        titulo.innerHTML = "Muito obrigado pela avaliação!"
        text.innerHTML = `Nota ${notaFinal}, poxa nos desculpe por não atender as expectativas, trabalharemos para melhorar.`
    } else if (notaFinal == 2) {
        titulo.innerHTML = "Muito obrigado pela avaliação!"
        text.innerHTML = `Nota ${notaFinal}, estamos nos preparando para melhorar o serviço sempre.`
    } else if (notaFinal == 3) {
        titulo.innerHTML = "Muito obrigado pela avaliação!"
        text.innerHTML = `Nota ${notaFinal}, pelo menos não é o pior dos serviços, né?`
    } else if (notaFinal == 4) {
        titulo.innerHTML = "Muito obrigado pela avaliação!"
        text.innerHTML = `Nota ${notaFinal}, nosso objetivo é sempre a excelência, ainda chegaremos lá.`
    } else if (notaFinal == 5) {
        titulo.innerHTML = "Muito obrigado pela avaliação!"
        text.innerHTML = `Nota ${notaFinal}, obaaa ficamos felizes em conseguir atender suas expectativas!`
    }
}