let formulario = document.querySelector('form');

let cxNota1 = document.querySelector('#nota1');
let cxNota2 = document.querySelector('#nota2');

let btnCalcular = document.querySelector('#btnCalcular');
let btnLimpar = document.querySelector('#btnLimpar');

let cxMedia = document.querySelector('#media');
let cxSituacao = document.querySelector('#situacao');

let aviso = document.querySelector('#aviso');

// função para calcular a média
function calcularMedia(n1, n2) {

    return (n1 + n2) / 2

}

// decide a situação final do aluno
function situacaoFinal(mediaFinal) {

    if (mediaFinal >= 7) {
        return 'Aprovado(a)';
    } else if (mediaFinal <= 3) {
        return 'Reprovado(a)';
    } else {
        return 'Recuperação';
    }

}

// formata a situação final
function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
        break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
        break
        
        case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
        break

        default:
            console.log('Situação Indefinida')

    }
}

// vai avaliar se o número digitado é válido
function validarNumero(numero) {
    let num1 = cxNota1.value;
    let num2 = cxNota2.value;
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {

        formulario.reset() // limpa o formulário
        aviso.textContent = 'Atenção: Digite uma nota entre 0 e 10!';
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000); // 2 segundos

    }
}

// após o click vai acessar a função para calcular a média
btnCalcular.addEventListener('click', function(e) {

    console.log('Calcular Média')
// pegar o valor que esta dentro das caixas
// usar metodo parseFloat para converter string para float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)
    
    console.log(nota1)
    console.log(nota2)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }

    e.preventDefault()

})

// limpa tudo e remove as classes de cores
btnLimpar.addEventListener('click', function() {
    
    cxSituacao.classList.remove('aprovado');
    cxSituacao.classList.remove('reprovado');
    cxSituacao.classList.remove('recuperacao');

})