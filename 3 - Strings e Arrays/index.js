// const nome = prompt("Qual o seu nome?")
// const corFavorita = prompt("Qual sua cor favorita?")

// console.log(`A cor favorita de ${nome} é ${corFavorita}`)

// const salario = prompt("Qual o seu salário?")
// const profissão = prompt("Qual sua profissão?")

// console.log(`O salário de pedro é R$${salario} como ${profissão}`)

//------------------------------

// const frase = prompt("Digite uma frase qualquer!")
// const novaFrase = frase.toUpperCase()

// console.log(novaFrase.replaceAll("O","I"))
// console.log(novaFrase.length)

//-------------------------------------------

// const raçasDeCachorro = ["Poodle", "Pinscher", "Dalmata", "Beagle", "Pitbull"];
// const numeroUsuario = Number(prompt("Insira um número de 1 à 5."));

// console.log(
//   `A raça escolhida pra você foi a ${raçasDeCachorro[numeroUsuario]}!`
// );

//-----------------------------------------

// const array = [1, 2, 3, 4, 5]

// console.log(array.length) //5

// array.push(7)
// console.log(array) // 1, 2, 3, 4, 5, 7

// array.splice(3, 2)
// console.log(array) // 1, 2, 3, 7

// console.log(array.length) // 4

//------------EXERCÍCIOS ENUNCIADO--------------------

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. NÃO SOUBE E N ENTENDI QDO EXECUTEI

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

//-----------------

// const frase = prompt("Digite uma frase") // Input é "Subi num ônibus em Marrocos"

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRRICOS 27

//1.------------------------------

// const nomeUsuario = prompt("Qual seu nome?")
// const emailUsuario = prompt("Qual o seu email?")

// console.log(`o e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!`)

//2.------------------------------

// const comidasPreferidas = ["sorvete", "sushi", "nhoque", "pizza", "salada"]
// const comidaPreferidaUsuario = prompt("Qual sua comida preferida?")

// comidasPreferidas[1] = comidaPreferidaUsuario

// // console.log(comidasPreferidas)
// console.log(`Essas são as minhas comidas preferidas:
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`) // usei o ctrl + f pra replace o nome das arrays q tinha errado

//3.----------------------------------------

// let listaDeTarefas = []

// const tarefaUm = prompt("Quais 1° tarefa hoje?")
// const tarefaDois = prompt("Quais 2° tarefas hoje?")
// const tarefaTres = prompt("Qual a 3° tarefas hoje?")

// // listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]
// listaDeTarefas.push(tarefaUm)
// listaDeTarefas.push(tarefaDois)
// listaDeTarefas.push(tarefaTres)

// console.log(listaDeTarefas)

// const tarefaTerminada = Number(prompt("Digite o número da tarefa que você terminou. (0, 1 ou 2)"))

// listaDeTarefas.splice(tarefaTerminada, 1)

// console.log(listaDeTarefas)

//Desafio 1----------------------------------------------

// const frase = prompt("Digite uma frase")

// const removeEspaço = frase.trim()

// const separa = removeEspaço.split(" ")

// console.log(separa)

//Desafio 2-----------------------------------------------

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(frutas.indexOf("Abacaxi"))
// console.log(frutas.length)
