//let tit = document.querySelector('h1');
//tit.innerHTML = 'Adivinhe o numero';

//let msg = document.querySelector('p');
//msg.innerHTML = 'Escolha um numero de 1 a 10';

let tentativa = 1

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoTela('h1','Adivinhe o numero' );
exibirTextoTela('p', 'Escolha um numero de 1 a 10');


function verificarChute(){
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto){
        exibirTextoTela('h1','acertou!!')
        let palaTent = tentativa > 1 ? 'tentativas' : 'tentaiva'
        let msgTent = `VOCÊ DESCOBRIU O NUMERO SECRETO COM ${tentativa} ${palaTent}`
        exibirTextoTela('p', msgTent)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else {
        if (chute > numeroSecreto) {
                exibirTextoTela('h1','você errou:(')
                exibirTextoTela('p', 'O número secreto é menor');
        } else {
                exibirTextoTela('h1','você errou')
                exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativa++
        limparCampo()
}
} 

function numeroAleatorio() {
   return parseInt(Math.random() * 10 + 1)
}

let numeroSecreto = numeroAleatorio()
console.log(numeroSecreto)

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarGame() {
    numeroSecreto = numeroAleatorio()
    limparCampo()

    exibirTextoTela('h1','Adivinhe o numero' );
    exibirTextoTela('p', 'Escolha um numero de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
