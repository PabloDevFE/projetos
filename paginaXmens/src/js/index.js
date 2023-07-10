const personagens = document.querySelectorAll('.personagem');
//seleciona todos os elementos com a tag 

personagens.forEach(personagem => {

    personagem.addEventListener('mouseenter', () => {
        
        //mudar a borda de seleção
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        //mudar a imagem do personagem selecionado
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem)
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

        //alterar o nome
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //alterar descrição 
        const descPersonagem = document.getElementById('descricao-personagem');
        descPersonagem.innerText = personagem.getAttribute('data-description')

    })
     
})