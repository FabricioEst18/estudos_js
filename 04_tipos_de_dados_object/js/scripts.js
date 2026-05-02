// Tipos de dados - Object
var obj = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
};

console.log(obj);
console.log(typeof obj);

// Acessando propriedades do objeto
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("Olá, " + obj.nome + "! Você tem " + obj.idade + " anos e é um " + obj.profissao + ".");

// Modificando propriedades do objeto
obj.idade = 31;
console.log("Idade atualizada: " + obj.idade);

// Adicionando novas propriedades ao objeto
obj.cidade = "São Paulo";
console.log("Cidade adicionada: " + obj.cidade);