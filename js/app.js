function alterarStatus(id) {
    var game = document.getElementById(`game-${id}`);
    var imagem = game.querySelector('.dashboard__item__image');
    var buttom = game.querySelector('.dashboard__item__button');

    if (buttom.classList.contains('dashboard__item__button--return')) {
        buttom.textContent = 'Alugar';
        buttom.classList.remove('dashboard__item__button--return');
        game.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
    } else {
        buttom.textContent = 'Devolver';
        buttom.classList.add('dashboard__item__button--return');
        game.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
    }
}