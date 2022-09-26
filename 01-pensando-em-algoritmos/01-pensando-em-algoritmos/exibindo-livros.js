const livros = require('./Livros')
let maisBarato = 0

for (let atual = 0; atual < maisBarato; atual++) {
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`O livro mais barato é o ${livros[maisBarato].nome},
custando apenas R$${livros[maisBarato].preco},00 `);