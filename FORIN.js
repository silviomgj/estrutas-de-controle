const notas = [3.7, 4.9, 5.3, 6.8, 9.9]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 22,
    peso: 62

}

for(let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}