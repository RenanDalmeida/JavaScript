//FUNCIONALIDADES
//1- Lista somente os gatos
//2- Lista somente os animais cuja idade seja maior que 7
//3- Some a idade de todos os pets
//4- Traga somente os nomes
//5- Traga a idade humana dos pets
//6- Mostre a quantidade de cachorros na lista
//7- Traga somente o nome e o tipo do pet

let pets = [{
    nome: "Doguinho A",
    idade: 4,
    tipoPet: "cachorro"
}, {
    nome: "Doguinho B",
    idade: 5,
    tipoPet: "cachorro"
}, {
    nome: "Doguinho C",
    idade: 11,
    tipoPet: "cachorro"
}, {
    nome: "Gatinho A",
    idade: 17,
    tipoPet: "gato"
}, {
    nome: "Gatinho H",
    idade: 2,
    tipoPet: "gato"
}, {
    nome: "Passarinho A",
    idade: 12,
    tipoPet: "pássaro"
}, {
    nome: "Doguinho Z",
    idade: 16,
    tipoPet: "cachorro"
}, {
    nome: "Doguinho H",
    idade: 4,
    tipoPet: "cachorro"
}, {
    nome: "Gatinho P",
    idade: 3,
    tipoPet: "gato"
}];

//filter -> filtra valores. (Pegar todos que sejam cachorros, pegar todos que tenham idade maior que 9, etc.)
//reduce -> executa uma função para cada elemento do array, e traz só um resultado. (Somar idades, etc)
//map -> mapear atributos. (Realizar operaçõs só com o nome, só com a idade, etc)

console.log("1:");
let gatos = pets.filter(pet => pet.tipoPet === "gato");
console.log(gatos);

console.log("2:");
let petsIdade7 = pets.filter(pet => pet.idade > 7);
console.log(petsIdade7);

//O reduce vai percorrer todos objetos, vai somando a idade e guardando em soma. É como se soma += idade. Colocamos dentro de chave pois é uma operação mais complexa, pois necessita desse 0. Não usamos somente lambda, mas uma arrow function.
console.log("3:");
let petsSomaIdade = pets.reduce((soma, pet) => {
    return soma + Number(pet.idade);
}, 0); //Esse zero é para formatar a resposta.
console.log(petsSomaIdade);

console.log("4:");
let petsNomes = pets.map(pet => pet.nome);
console.log(petsNomes);

console.log("5:");
let petsIdadeHumana = pets.map(pet => Number(pet.idade) * 7);
console.log(petsIdadeHumana);

console.log("6:");
let qtdCachorros = pets.filter(pet => pet.tipoPet === "cachorro");
console.log(qtdCachorros.length);

//Usamos chaves por que é uma operação mais complexa.
console.log("7:");
let nomeTipo = pets.map(pet => {
    return {
        nome: pet.nome,
        tipoPet: pet.tipoPet
    }
});
console.log(nomeTipo);