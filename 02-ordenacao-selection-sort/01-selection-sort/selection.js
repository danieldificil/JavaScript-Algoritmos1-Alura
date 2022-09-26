const livros = require('../../01-pensando-em-algoritmos/01-pensando-em-algoritmos/Livros.js')
const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
 }

console.log(livros)