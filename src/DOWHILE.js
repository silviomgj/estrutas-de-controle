function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.random(valor)
}

let opcao 

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao} .`)
} while (opcao != -1)

console.log('até a proxima')
