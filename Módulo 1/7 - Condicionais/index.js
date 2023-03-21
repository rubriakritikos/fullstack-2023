//---------------------CONDICIONAIS--IF-ELSE----------------------------------------------

// const numero1 = Number(prompt("Digite o primeiro número"))
// const numero2 = Number(prompt("Digite o segundo número"))

// function compararNumeros(num1, num2){
//     if(num1 === num2){
//         console.log("São iguais!")
//     }else{
//         console.log("Não são iguais!");
//     }
// }

// compararNumeros(numero1,numero2)

//Exercício 1 faz só o if e Exercício 2 faz o else completo

//-----------------------------------------------------

// const numero1 = Number(prompt("Digite o primeiro número"))
// const numero2 = Number(prompt("Digite o segundo número"))

// function compararNumeros(num1, num2){
//     if(num1 > num2){
//         console.log("Primeiro número é maior que o segundo!")
//     }else if (num1 < num2) {
//         console.log("Primeiro número é menor que o segundo!")
//     }else{
//         console.log("Os dois números são iguais!");
//     }
// }

// compararNumeros(numero1,numero2)

//---------------SWITCH-CASE-----------------------------------------

// const pokemonInicial = prompt("Qual Pokémon inicial você escolhe?")

// switch (pokemonInicial) {
//     case "Bulbasauro":
//         console.log("Planta e Veneno")
//         break
//     case "Charmander":
//         console.log("Fogo")
//         break
//     case "Squirtle":
//         console.log("Água")
//         break 
//     default:
//         console.log("Pokémon não encontrado entre as três opções iniciais.")
//         break
// }

//-----------------------------------------------------------------------
// let idade = Number(prompt("Digite sua idade"))
// let ensinoMedioConcluido = prompt("Você concluiu o ensino médio?(Responda 'Sim' ou 'Não')")
// let cursaOutraFaculdade = prompt("Você cursa outra faculdade?(Responda 'Sim' ou 'Não')")


// function aptoParaEstudar(condicao1,condicao2,condicao3) {
//     if(condicao1 === "Sim" && (condicao2 >= 18) && condicao3 === "Não"){
//         console.log("Está apto para estudar nesta faculdade!");
//     }else{
//         console.log("Não está apto para estudar nesta faculdade!");
//     }
// }

// aptoParaEstudar(ensinoMedioConcluido,idade,cursaOutraFaculdade)

//sei q dá pra fazer melhor mas não consegui sem ver a resolução ainda

//EXERCÍCIOS INTERPRETAÇÃO-----------------------------------------------
//1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a. Receber um número do usuário e testar se é um número par
//b. Número pares
//c. Números Ímpares

//2.--------------------------------------------------------------------------

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Informar o preço da fruta escolhida pelo usuário
//b. O preço da fruta maçã é R$2.25
//c. Não entendi de prima mas o oreço passa a ser a do último item default

//3.-------------------------------------------------------------

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a. Pedindo ao usuário que digite um número aleatório
//b. Esse número passou no teste | Erro falando q "mensagem" não tem atribuição ainda
//c. Sim. A variável criada "mensagem" está local dentro da condicional e o log tá fora não podendo acessar

//EXERCÍCIOS DE ESCRITA DE CÓDIGO ------------------------------------------------------
//1.

// const idade = Number(prompt("Digite sua idade"))

// if (idade >= 18) {
//     console.log("Você pode dirigir!");
// }else{
//     console.log("Você ainda não pode dirigir!");
// }

//2.--------------------------------------------------------------------------

// const turnoAluno = prompt("Qual turno você estuda? Digite 'M' para Matutino, 'V' para vespertino ou 'N' para noturno.")

// if (turnoAluno === 'M') {
//     console.log("Bom dia!");
// } else if(turnoAluno === 'V'){
//     console.log("Boa tarde!");

// }else if(turnoAluno === 'N'){
//     console.log("Boa noite!")
// }else{
//     console.log("Erro!");
// }

//3.-----------------------------------------------------------------------

// const turnoAluno = prompt("Qual turno você estuda? Digite 'M' para Matutino, 'V' para vespertino ou 'N' para noturno.")

// switch (turnoAluno) {
//     case "M":
//         mensagem = "Bom dia!"
//         break;
//     case "V":
//         mensagem = "Boa tarde!"
//         break; 
//     case "N":
//         mensagem = "Boa noite!"
//         break;        
//     default:
//         mensagem = "Erro!"
//         break;
// }

// console.log(mensagem);


//4.-----------------------------------------------------------------------------

// const generoFilme = prompt("Qual o gênero do filme que vai assistir?")
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (generoFilme === "fantasia" && precoIngresso <= 15) {
//     console.log("Bom filme!");
// } else {
//     console.log("Escolha outro filme :(");
// }

//DESAFIO 1 -----------------------------------------------------------------------

// const generoFilme = prompt("Qual o gênero do filme que vai assistir?")
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if (generoFilme === "fantasia" && precoIngresso <= 15) {
//         const snack = prompt("Qual snack você vai comprar para assistir ao filme?")
//         console.log("Bom filme!")
//         console.log(`Aproveite seu ${snack}!`);
// } else {
//     console.log("Escolha outro filme :(");
// }

//2. ---------NÃO CONSEGUI-------------------------------------------------------------------------

// const nomeCompleto = prompt("Digite seu nome completo")
// const tipo = prompt("[IN]ternacional ou [DO]mestico?")
// const etapa = prompt("Semi-final [SF], Decisão terceiro [DT] ou Final [FI]")
// const categoria = Number(prompt("Catergoria 1, 2, 3 ou 4?"))
// const quantidadeDeIngresso = Number(prompt("Quantos ingressos?"))

// let precoUnitario
 
//CONTINUAR
