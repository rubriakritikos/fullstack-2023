//Exercício 1

// const valor1 = 3
// const valor2 = 4

// const soma = valor1 + valor2 // 7


// const valor1 = 3
// const valor2 = 5

// const expressao = valor1 * valor2 / 2 // 7.5


// const valor1 = 5
// const valor2 = 4

// const expressao = (valor2 - valor1) * -1 // não entendi pq ta dando 9 no resultado

// console.log(expressao)

// const valor1 = 234
// const valor2 = 5

// const restoDaDivisao = valor1 % valor2 //4

// console.log(restoDaDivisao)

//----------------------------------

//Exercício 2

// const valor1 = 5
// const valor2 = 4

// console.log(valor1 === valor2) // false
// console.log(valor1 != valor2) // true
// console.log(valor1 > valor2) // true
// console.log(valor1 < valor2) // false

// ---------------------------------

//Exercício 3

// const a = true
// const b = false
// const c = true

// console.log(a && b) //false
// console.log(b && c) //false
// console.log(a && c) //true
// console.log(a && b && c) //false

//Exercício 4
// console.log(a || b) // true
// console.log(b || c) // true
// console.log(a || c) // true
// console.log(a || b || c) // true

// --------------------------------

//Exercício 5

//const nome = prompt("Qual é o seu nome?")
//const idade = Number(prompt("Qual sua idade?"))

//const diferençaDeIdade = 2050 - 2023

// const anoAtual = new Date()

// let diferenca = 2050 - anoAtual.getFullYear()

// console.log(diferenca)

//console.log("Nome: ", nome)
//console.log("Idade: ", idade)
//console.log("É maior de idade? ", idade > 17)
//console.log("Idade em 2050: ", idade + 27)

// -------------Exercícios Enunciados--------------------------
//1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // a. false

// resultado = bool1 && bool2 && bool3 
// // console.log("b. ", resultado) // b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // c. false // qdo executei eu vi que errei e é true. Não entendi porque

// console.log("d. ", typeof resultado) // d. boolean // foi um pouco chute da minha parte ou eu buguei

//2.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma) // vai contatenar os dois números e não somar. 


//3.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma) //Solução é usar o Number na frente do prompt dos números

// -------------Exercícios de Código--------------------------

// const idadeUsuario = Number(prompt("Qual a sua idade? "))
// const idadeAmigo = Number(prompt("Qual a idade do seu best friend? ")) 

// let diferença = idadeUsuario > idadeAmigo

// console.log("Sua idade é maior do que a do seu melhor amigo? ", diferença)
// console.log(idadeUsuario - idadeAmigo)



// const numPar = Number(prompt("Digite um número par!"))

// console.log(numPar % 2) 
// Notei o padrão e tu me explicou ontem q dá pra ver qdo o número é par qdo acabar em 0

//O console mostra 1



// const idade = Number(prompt("Quantos anos você tem?"))

// console.log("a. ", idade * 12 )
// console.log("b. ", idade * 365 ) 
// console.log("c. ", idade * 365 * 24 )


// const numero1 = Number(prompt("Digita um número!"))
// const numero2 = Number(prompt("Digita outro número!"))


// console.log("O primeiro número é maior que o segundo? ", numero1 > numero2)
// console.log("O primeiro numero é igual ao segundo? ", numero1 === numero2)
// console.log("O primeiro numero é divisível pelo segundo? ", numero1 % numero2 === 0)
// console.log("O segundo numero é divisível pelo primeiro? ", numero2 % numero1 === 0)
