// Exercício de Fixação

/* 1) Crie um objeto carrinho. Este objeto vai guardar nossas compras. O objeto carrinho deve guardar:

- o nome da pessoa que faz as compras
- sua forma de pagamento
seu endereço */

// Para fazer essa questão é só criar uma variável (objeto) = {propriedades do objeto}

const carrinho = {
    comprador: "Dhouglas",
    formaPagamento: "PIX",
    endereco: "Av. Frei Damião, 157"
}

/* Adicione ao objeto carrinho um array de objeto chamado "compras" para guardar as compras.
Cada compra deve possuir:

- o nome do produto
- o preço do produto
- a quantidade de unidades destes produtos que serão comprados */

// Para fazer essa questão utiliza-se objeto.propriedade nova = [{objetos do array com propriedades}]

carrinho.compras = [
    {
        nomeDoProduto: "Chocolate",
        preco: 6.99,
        quantidade: 4
    },
    {
        nomeDoProduto: "Batata Frita",
        preco: 9.99,
        quantidade: 2
    },
    {
        nomeDoProduto: "Biscoito Treloso",
        preco: 1.99,
        quantidade: 6
    },
    {
        nomeDoProduto: "Toddynho",
        preco: 2.25,
        quantidade: 6
    }
]

// Imprima a quantidade de compras que existem no carrinho.

// Para fazer essa questão utiliza-se .length ao final do objeto com propriedade de array.

console.log(carrinho)
console.log(`O carrinho de ${carrinho.comprador} possui: ${carrinho.compras.length} produtos.`)

/* Crie uma cópia do objeto (espalhamento), chamada "carrinhoPresente", que seja igual ao carrinho original,
mas com o nome da pessoa alterado para o nome de uma pessoa que você gosta, e a forma de pagamento
alterada para "cartão presente". */

/* Para fazer essa questão cria-se uma nova variável (objeto) = {...nome do objeto à ser copiado,
propriedades com valores alterados} */

const carrinhoPresente = {
    ...carrinho,
    comprador: "Jaciane",
    formaPagamento: "Cartão Presente",
    endereco: "Av. Frei Damião, 157"
}

console.log(carrinhoPresente)
console.log(`O carrinho de ${carrinhoPresente.comprador} também possui: ${carrinho.compras.length} produtos.`)