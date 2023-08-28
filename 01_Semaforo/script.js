//armazena das divs das cores
let corVermelho = document.querySelector('#corVermelho');
let corAmarelo = document.querySelector('#corAmarelo');
let corVerde = document.querySelector('#corVerde');
//armazena os botões
let btnPare = document.querySelector('#btnPare');
let btnAtencao = document.querySelector('#btnAtencao');
let btnSiga = document.querySelector('#btnSiga');

//"acende" o vermelho
btnPare.addEventListener('click', function () {
    corVermelho.classList.remove('opacidade');
    corAmarelo.classList.add('opacidade');
    corVerde.classList.add('opacidade');
})
//"acende" o amarelo
btnAtencao.addEventListener('click', function () {
    corVermelho.classList.add('opacidade');
    corAmarelo.classList.remove('opacidade');
    corVerde.classList.add('opacidade');
})
//"acende" o verde
btnSiga.addEventListener('click', function () {
    corVermelho.classList.add('opacidade');
    corAmarelo.classList.add('opacidade');
    corVerde.classList.remove('opacidade');
})