// DECÇAO DE VARIÁVEIS: var, let, const

// var nome_variavel = valor;
var teste = 1;

console.log(teste);

// Tipagem fraca
teste = "Agora sou uma string";

console.log(teste);
//DICA: Alterar o valor de uma variável: OK / Alterar o tipo de uma variável: Problema

//Variável de forma GLOBAL, pode ser acessada em qualquer parte do código, mesmo antes de sua declaração (hoisting).
nome = "João";

console.log(nome);

// let: variável de escopo local, pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo
let idade = 30;

console.log(idade);

//const: variável de escopo local, imutável (não pode ser reatribuída)
const PI = 3.14;

console.log(PI);

// DICA: Use const por padrão e let quando precisar de reatribuição. Evite usar var para evitar problemas de escopo e hoisting.

// DICA: CamelCase para declaração de variáveis: nomeVariavel, idadeUsuario, etc.
minhaVariavel = "Exemplo de variável em camelCase";

console.log(minhaVariavel);