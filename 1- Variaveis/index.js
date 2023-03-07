//-- comando prompt serve para solicitar algo para o usuário

// const nome = prompt("Qual é o seu nome?")
// const idade = prompt("Quantos anos você tem?")
// 
// console.log(nome, idade)
// console.log(typeof nome, idade)

// -- Exercício da aula --

// const primeiroNome = "Rúbria"
// const sobrenome = "Kritikos"
// let idade = 30
// let souEstudante = true
// 
// console.log("Olá,", "eu sou a", primeiroNome, sobrenome, "e tenho", idade, "anos")
// console.log("Status de estudante", souEstudante)

//-- typeof serve para descobrir qual tipo do valor da variável--

// console.log(typeof idade)

/*--------------------EXERCÍCIOS---------------------
1. 
let a = 10
let b = 10

console.log(b) -- 10

b = 5
console.log(a, b) -- 10, 5

------------
2. 
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) -- 10, 10, 10

------------
3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. 
Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
--- Solicita ao usuário para responder quantas horas trabalha diariamente || jornadaTrabalhoDia ou horasTrabalhadasDia

let t = prompt("Quanto você recebe por dia?")
--- Solicita ao usuário para responder quanto recebe de dinheiro por dia de trabalho || salarioDia ou recebimentoDiario

alert(`Voce recebe ${t/p} por hora`) 
--- Aparece numa janelinha uma frase contendo o quanto o usuário recebe por hora de acordo com a resposta que ele forneceu
*/

//------------------ Exercício de código -----------------

//---Exercício 1---

// let nome 
// let idade 

// console.log(typeof nome, idade) // erro pq não atribuí valor algum

// const nome = prompt("Qual o seu nome?")
// const idade = prompt("Quantos anos você tem?")

// console.log(typeof nome) // idade não tem Number pra ser impresso em number ainda
// console.log(typeof idade) // idade não tem Number pra ser impresso em number ainda

// console.log("Olá " + nome + ", você tem" + idade + "anos.")

//---Exercício 2---

// const perguntaUm = "Você gosta de caju?"
// const perguntaDois = "Hoje está frio?"
// const perguntaTres = "Quer casar comigo?"

// const respostaUm = "Sim"
// const respostaDois = "Sim"
// const respostaTres = "Não"

// console.log(perguntaUm, "-", respostaUm)
// console.log(perguntaDois, "-", respostaDois)
// console.log(perguntaTres, "-", respostaTres) 

//---Exercício 3---

//  let a = 10
//  let b = 25
 
//  c = a
//  a = b
//  b = c
 
//  Depois de trocados, teremos o seguinte resultado:
//  console.log("O novo valor de a é", a) // O novo valor de a é 25
//  console.log("O novo valor de b é", b) // O novo valor de b é 10

// --- DESAFIO ---

// let numeroUm = Number(prompt("Qual o primeiro valor da operação?"))
// let numeroDois = Number(prompt("E agora, qual o segundo valor?"))

// console.log("O primeiro número somado ao segundo número resulta em:", numeroUm + numeroDois) 
// console.log("O primeiro número multiplicado pelo segundo número resulta em:", numeroUm * numeroDois)

//  os valores recebidos no programa são string. Então no primeiro resultado como eu usei '+' ele concatenou
//  Já no segundo resultado, usando o '*' pra multiplicar deu o valor correto.
