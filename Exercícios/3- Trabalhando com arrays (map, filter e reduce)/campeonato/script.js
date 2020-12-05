/*
Data a estrutura html fornecida obtenha as informações abaixo:

1. Lista somente os times cujas vitórias seja maior ou igual que 20
2. Traga somente os nomes dos times;
3. Adicione mais um time chamado Wolves, vitorias 12, empates 8, derrotas 10, gols proprios 38, golscontras 36;
4. Mostre o nome e a quantidade de jogos(vitorias, empates e derrotas), quantidade de vitorias, empates e derrotas de um time
5. Informe a quantidade de jogos do campeonato;
*/

let times = [{
    nome: "Liverpool",
    vitorias: 23,
    empates: 7,
    derrotas:1,
    golsproprio:70,
    golscontra:52
}, {
    nome: "City",
    vitorias: 24,
    empates: 2,
    derrotas:4,
    golsproprio:79,
    golscontra:21
}, {
    nome: "Tottenhan",
    vitorias: 20,
    empates: 1,
    derrotas:9,
    golsproprio:57,
    golscontra:32
}, {
    nome: "Arsenal",
    vitorias: 18,
    empates: 6,
    derrotas:6,
    golsproprio:63,
    golscontra:39
}, {
    nome: "Manchester United",
    vitorias: 17,
    empates: 7,
    derrotas:6,
    golsproprio:58,
    golscontra:40
}, {
    nome: "Chelsea",
    vitorias: 17,
    empates: 6,
    derrotas:7,
    golsproprio:50,
    golscontra:33
}, {
    nome: "Wolves",
    vitorias: 12,
    empates: 8,
    derrotas: 10,
    golsproprio: 38,
    golscontra: 36
}];

console.log("1:");
let timesPorVitoria = times.filter(time => time.vitorias >= 20);
console.log(timesPorVitoria);

console.log("2:");
let timesNomes = times.map(time => {
    return {
        nome: time.nome
    }
});
console.log(timesNomes);

console.log("4:");
let timeVitorias = times.map(time => {
    return {
        nome: time.nome,
        totalJogos: time.vitorias + time.empates + time.derrotas,
        vitorias: time.vitorias,
        empates: time.empates,
        derrotas: time.derrotas
    }
});
console.log(timeVitorias);

console.log("5:");
let totalJogosCampeonato = times.reduce((soma, jogo) => {
    return soma + Number(jogo.vitorias) + Number(jogo.derrotas) + Number(jogo.empates);
}, 0);
console.log(totalJogosCampeonato);