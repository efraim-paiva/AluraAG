function alterarStatus(id) {
    var game = document.getElementById(`game-${id}`);
    var imageElement = game.querySelector('.dashboard__item__img');
    var buttonElement = game.querySelector('.dashboard__item__button');

    if (buttonElement.classList.contains('dashboard__item__button--return')) {
        if (confirm('Tem certeza que deseja devolver o jogo?') == false) {
            return;
        }
        buttonElement.classList.remove('dashboard__item__button--return');
        buttonElement.textContent = 'Alugar';
        imageElement.classList.remove('dashboard__item__img--rented');
    } else {
        buttonElement.classList.add('dashboard__item__button--return');
        buttonElement.textContent = 'Devolver';
        imageElement.classList.add('dashboard__item__img--rented');
    } alugados();
}

function alugados() {
    var alugados = 0;
    var alugar = document.querySelectorAll('.dashboard__item__button--return');
    alugar.forEach(function (item) {
        alugados++;
        console.log(alugados);
    });
}