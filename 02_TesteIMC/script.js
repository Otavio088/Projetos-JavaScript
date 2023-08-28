let formulario = document.querySelector('form');

let cxNome   = document.querySelector('#nome');
let cxIdade  = document.querySelector('#idade');
let cxPeso   = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');
let cxImc    = document.querySelector('#resultadoImc');

let btnEnviar = document.querySelector('#btnEnviar');
let btnLimpar = document.querySelector('#btnLimpar');

let aviso = document.querySelector('#aviso');
let dados = document.querySelectorAll('.pessoa');

// a função anônima recebe como parâmetro um evento
btnEnviar.addEventListener('click', function (e) { // após clicar no botão enviar é feito o processamento de dados no formulário pela função anônima
    let nome   = cxNome.value; // .value pega os dados das caixas (inputs)
    let idade  = cxIdade.value;
    let peso   = cxPeso.value;
    let altura = cxAltura.value;
    let imc    = (peso / (altura^2)).toFixed(2); //fixa em 2 casas decimais

    cxImc.value = imc;
    let sit = situacaoDoPeso(imc);
    aviso.textContent = sit;
    
    // objeto pessoa
    let pessoa = {
        nome   : nome,
        idade  : idade,
        peso   : peso,
        altura : altura,
        imc    : imc,
        sit    : sit
    }

    console.log(pessoa)
    dados[1].textContent = pessoa.nome;
    dados[2].textContent = pessoa.idade + " anos";
    dados[3].textContent = pessoa.peso + " Kg";
    dados[4].textContent = pessoa.altura + " m";
    dados[5].textContent = pessoa.imc + "  " + pessoa.sit;

    e.preventDefault() // mantem o comportamento padrao
})

function situacaoDoPeso(imc) {
    
    if (imc < 18.5) {
        return 'Baixo peso!';	
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal!';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso!';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade I!';
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade II!';
    } else if (imc >= 40) {
        return 'Obesidade Mórbida!';
    } else {
        return 'Informe seu peso corretamente!';
    }

}