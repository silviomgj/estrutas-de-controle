function soBoaNoticia(nota) {
    if (nota >= 7 ) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(3)

function seForVerdade(valor) {
    if ( valor) {
        console.log('é verdade...' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(-1)
seForVerdade(0)
seForVerdade({})
