const imprimirResultado = function (nota) {       // em SWITCH é obrigatório o uso do BREAK 
    switch (Math.floor(nota)) {                                     // no fim de cada case
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 8: 
        case 7:
            console.log('aprovado')
            break
        case 6:
        case 5:
            console.log('recuperação')
            break
        case 4: 
        case 3: 
        case 2: 
        case 1: 
        case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')
                    
    }
}

imprimirResultado(0,1)
imprimirResultado(5)
imprimirResultado(7,99)
imprimirResultado(10)
