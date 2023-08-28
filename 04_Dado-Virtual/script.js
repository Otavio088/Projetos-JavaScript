let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')

btnSortear.addEventListener('click', function() {
    //adiciona animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    //oculta o botão sortear
    btnSortear.style.display = 'none'

    //setTimeout executa ações após 1.75 segundos
    setTimeout(function() {

        //armazena o número sorteado em uma variável
        numeroSorteado = getRandomInt(1,6)
        console.log(numeroSorteado)

        //o número que aparecer será o da imagem
        imgDado.setAttribute('src' , 'img/'+numeroSorteado+'.png')
        
        //escreve no parágrafo numeroSorteado
        sorteado.textContent = numeroSorteado
        
        //exibe o botão sortear
        btnSortear.style.display = 'inline-block'
        
        //tira a animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)

})

//Função que gera número randômico inteiro, com o mínimo e máximo
function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min; //sorteio de um número
}