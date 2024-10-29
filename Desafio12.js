var jogahtml = window.document.getElementById('saida')

function clique1() {
    jogahtml.innerHTML += '<p> Você clicou escolheu a primeira opção = botão 1 </p>'
       }

       fuction clique2(){
        jogohml.innerHTML+= '<p> Você clicou escolheu a primeira opção = botão 2 </p>'
       }

function clique3 () {
    jogohtml.innerhtml += '<p> você clicou escolheu a primeira opção = botão 3</p>'
}

function parmpar () {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 0) { 
     tipo = '<strpng>PAR,/strong>'
    } else { 
       tipo = '<strong>ÍMPAR</strong>'
    }

let res = document.querySelector('section#result')
    res.innerHTML = ' <p>0 número digitado foi ${num} e ele é: ${tipo}!</p>'
