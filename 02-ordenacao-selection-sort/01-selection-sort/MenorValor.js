  const livros = require('../../01-pensando-em-algoritmos/01-pensando-em-algoritmos/Livros.js')

  function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
      console.log('atual',atual)
      console.log('maisBarato', maisBarato)
      if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
      }
    }
    return maisBarato
  }

  module.exports = menorValor