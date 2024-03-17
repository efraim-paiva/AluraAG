// Função para alterar o status de um jogo (alugar ou devolver)
function alterarStatus(id) {
    // Obter o elemento do jogo pelo ID
    var game = document.getElementById(`game-${id}`);
    // Obter o elemento da imagem do jogo
    var imageElement = game.querySelector('.dashboard__item__img');
    // Obter o elemento do botão do jogo
    var buttonElement = game.querySelector('.dashboard__item__button');

    // Verificar se o botão está marcado como "Devolver"
    if (buttonElement.classList.contains('dashboard__item__button--return')) {
        // Se o usuário clicar em "Cancelar", não fazer nada
        if (confirm('Tem certeza que deseja devolver o jogo?') == false) {
            return;
        }
        // Remover a classe e alterar o texto do botão para "Alugar"
        buttonElement.classList.remove('dashboard__item__button--return');
        buttonElement.textContent = 'Alugar';
        // Remover a classe que indica que o jogo está alugado
        imageElement.classList.remove('dashboard__item__img--rented');
    } else {
        // Se o botão não estiver marcado como "Devolver", marcar como "Devolver"
        buttonElement.classList.add('dashboard__item__button--return');
        buttonElement.textContent = 'Devolver';
        // Adicionar uma classe para indicar que o jogo está alugado
        imageElement.classList.add('dashboard__item__img--rented');
    }
    // Chamar a função para atualizar a contagem de jogos alugados
    atualizarContagemAlugados();
}

// Função para contar e exibir a quantidade de jogos alugados
function atualizarContagemAlugados() {
    var alugados = 0;
    // Obter todos os botões marcados como "Devolver"
    var alugar = document.querySelectorAll('.dashboard__item__button--return');
    // Iterar sobre os botões e contar a quantidade de jogos alugados
    alugar.forEach(function (item) {
        alugados++;
    });
    // Exibir a quantidade de jogos alugados no console
    console.log(`Total de jogos alugados: ${alugados}`);
}