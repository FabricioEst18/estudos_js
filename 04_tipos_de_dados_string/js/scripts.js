var nome = "João";

console.log(nome);
console.log(typeof nome);

var sobrenome = "Silva";

console.log(sobrenome);
console.log(typeof sobrenome);

// Concatenando strings
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);
console.log(typeof nomeCompleto);

// Números entre aspas são tratados como strings
var idade = "30";

console.log(idade);
console.log(typeof idade);

//document.write: escreve diretamente no documento HTML
document.write("Olá, " + nomeCompleto + "! Você tem " + idade + " anos.");