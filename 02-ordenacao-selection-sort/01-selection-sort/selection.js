const livros = require('../../01-pensando-em-algoritmos/01-pensando-em-algoritmos/Livros.js')

function selectionSort(arrProdutos){
    const menorValor = require('./menorValor')

    for (let atual = 0; atual < arrProdutos.length; atual++) {
        let menor = menorValor(arrProdutos, atual)
        let livroAtual = arrProdutos[atual]
        let livroMenorPreco = arrProdutos[menor]

        arrProdutos[atual] = livroMenorPreco
        arrProdutos[menor] = livroAtual
    }
}

module.exports = selectionSort