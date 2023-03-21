//Exercício 1
// const nome1 = "Rúbria"
// const nome2 = "Raquel"
// const nome3 = "Caroline"

// function mensagemDeOla(nome){
//     console.log(`Olá, ${nome}!`)
// }

// mensagemDeOla(nome1)
// mensagemDeOla(nome2)
// mensagemDeOla(nome3)

//Exercício 2 ------
// const num1 = 2
// const num2 = 4
// const soma = num1 + num2

// function somar(num1,num2){
//     console.log(soma)
// }

// somar(num1, num2) 

//Exercício 3 ------

// const dizerOla = function (nome){
//     console.log("Olá, " + nome + "!")
// }

// dizerOla("Rúbria")
// dizerOla("Raquel")
// dizerOla("Carol")


// const num1 = 2
// const num2 = 4
// const soma = num1 + num2

// const somar = (num1, num2) => {
//     return num1 + num2
// }

// console.log(soma)

//1-------------------------------------

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a. 10 e 50
//b. A função estaria sendo chamada mas nada seria impresso no console

//2----------
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

/*a. A função passa o texto recebido para minúsculo e 
verifica se existe a palavra "cenoura". E na resposta vai se é true ou false*/

//b. i. true ii. false iii. false

//1.a------------------------------------

// function informacaoUsuario(){
//     console.log("Eu sou Rúbria, tenho 30 anos, moro em Valinhos e sou UX UI Designer")
// }

// informacaoUsuario()

//b.
// const nomeUsuario = prompt("Digite seu nome")
// const idadeUsuario = Number(prompt("Qual é sua idade?"))
// const cidadeUsuario = prompt("Qual cidade você mora?")
// const profissaoUsuario = prompt("Qual sua profissão?")

// function informacaoUsuario(nome, idade, cidade, profissao){
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
// }

// console.log(informacaoUsuario(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario))

//2a-------------------------------
// const numero1 = 5
// const numero2 = 10

// function somarNumeros(num1,num2){
//     return num1 + num2
// }

// console.log(somarNumeros(numero1, numero2))

//b.

// function bool(num1, num2){
//     return num1 >= num2
// }

// console.log(bool())

//c.
// const numero = prompt("Digite um numero")

// function verificarNumeroPar(num){
//     if(numero % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(verificarNumeroPar(numero)) // eu fiz sozinha porém eu n peguei o raciocínio completo ainda

//d.
// const mensagem = prompt("Digite uma mensagem!")

// function tamanhoMensagemEmMaiuscula(msg){
//     return msg.toUpperCase().lenght
// }

// console.log(tamanhoMensagemEmMaiuscula(mensagem)) // não consegui deu undefined

//3.------------------------
// const valor1 = Number(prompt("Digite o primeiro valor da operação."))
// const valor2 = Number(prompt("Digite o segundo valor da operação."))

// function soma(num1,num2){
//     return num1 + num2
// }

// function subtração(num1,num2){
//     return num1 - num2
// }

// function multiplicação(num1,num2){
//     return num1 * num2
// }

// function divisão(num1,num2){
//     return num1 / num2
// }

// console.log(`Soma: ${soma(valor1,valor2)}`)
// console.log(`Subtração: ${subtração(valor1,valor2)}`)
// console.log(`Multiplicação: ${multiplicação(valor1,valor2)}`)
// console.log(`Divisão: ${divisão(valor1,valor2)}`)

//Desafios------------------------------
//a.
// const Nome = "Rúbria"

// const meuNome = nome => {
//     console.log(nome)
// }

// meuNome(Nome)

//b.
// const valorA = 2
// const valorB = 4

// const somar = (a, b) => a + b

// console.log(valorA, valorB) // não consegui ainda

//2. //NEM FUDENO


