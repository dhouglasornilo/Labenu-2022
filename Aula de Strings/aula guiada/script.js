const nome = prompt("Qual o seu nome?")
const cor = prompt("Qual a sua cor favorita?") 
/*  const nome = prompt("Qual o seu nome?").toLowerCase()
const cor = prompt("Qual a sua cor favorita?").toLowerCase()  */

/* const nome = "Dhouglas"
const cor = "Preto"  */

const frase = "A cor favorita do " + nome + " é " + cor

console.log(frase)

console.log(`A cor favorita do ${nome} é ${cor}`)


//const citacao = prompt("Escreva uma citação.")
const citacao = "bla"

const fraseCitacao = "\"" + citacao + "\""
console.log(fraseCitacao) 

//console.log(" \"estou escrevendo uma string\" ")

//quebrar a linha
console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

//letra maiuscula

console.log(`Nome: ${nome.toUpperCase()} \n Cor favorita: ${cor}`)

console.log(nome.length)
console.log(nome.includes('a'))

//exercicio de fixacao

const nomeUsuario = prompt("Informe o seu nome.")
const emailUsuario = prompt("Informe o seu email.")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}!`)

const fraseCadastro = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}! O nome possui ${nomeUsuario.length} caracteres`

console.log(fraseCadastro)

//console.log(fraseCadastro.replaceAll("R","l").replaceAll("r","l"))
console.log(fraseCadastro.replaceAll("r","l"))
console.log("o email possui @?", emailUsuario.includes("@")) 
