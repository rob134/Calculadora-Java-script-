/*
Exemplo de uma Tabuada
*/

//declaração de uma função
function calculaTabuada(){

//Obtendo do DOM o tbody da tabela    
let tabuada = document.querySelector("#tabuada tbody");
//Obtendo o valor A do campo input number e convertendo em inteiro
let valorA = parseInt(document.querySelector("#valorA").value);
//Limpando o conteúdo de tbody
tabuada.innerHTML = '';
//criando uma laço de repetição de 0 a 10
for(let valorB = 0; valorB <=10; valorB++){
    //calculando o resultado da linha atual
    let resultado = valorA * valorB;

    //criando o template da linha atual
    let template = `
        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
    `;
    //criando o elemento tr
    let tr = document.createElement('tr');
    //inserindo as colunas na linha
    tr.innerHTML = template;
    //inserindo a linha na tabela
    tabuada.append(tr);
}

}
//chamando a nossa função pela primeira vez
calculaTabuada();
//adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada);