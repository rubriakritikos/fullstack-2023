//Exercícios Slide -------------------------

// const filme = {
//     direção: "As Wachowski",
//     nome: "Matrix",
//     lançamento: 2000,
//     elenco: [
//     {nome: "Keanu Reeves"},
//     {nome: "Laurence Fishburne"},
//     {nome: "Carrie-Anne Moss"}
//     ],
//     personagens: [
//     "Neo",
//     "Morpheus",
//     "Trinity"
//     ],
//     assistido: true
// }

// filme.elenco[0].nome = "Xuxa"

// console.log("O nome do filme é", filme.nome, ".Seus personagens são", filme.personagens[0], "," , filme.personagens[1], "e" , filme.personagens[2])

// console.log(filme.elenco[0].nome,"como:", filme.personagens[0])
// console.log(filme.elenco[1]["nome"],"como:", filme.personagens[1])
// console.log(filme.elenco[2].nome,"como:", filme.personagens[2])

//----------------------

// const pessoa = {
//     nome: "Caroline",
//     idade: 29,
//     gêneroMusicalPreferido:"MPB",
// }

// console.log("O nome da pessoa é", pessoa.nome, "ela tem", pessoa.idade, "anos e gosta muito de", pessoa.gêneroMusicalPreferido)

//-----------------------

// adicionarObjetos = () => {
//     pessoa.comidasPreferidas = ["sushi", "lasanha", "batata frita"],
//     pessoa.melhorAmiga = {Nome: "Rúbria", Idade: 30}
//     console.log("O nome da pessoa é", pessoa.nome, "e suas comidas preferidas são",
//     pessoa.comidasPreferidas[0], ",", pessoa.comidasPreferidas[1], "e", pessoa.comidasPreferidas[2],
//     ". Sua melhor amiga se chama", pessoa.melhorAmiga.Nome, "e tem", pessoa.melhorAmiga.Idade, "anos")
// }

// adicionarObjetos()

//Exercícios Interpretação--------------------------------

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// Matheus Nachtergaele
// 3 (errei mas eu entendi kkk)
// Globo 14h (correção: canal: "Globo" | horario: "14h")

//----------------------------

// const cachorro = {
// 	nome: "Juca",
// 	idade: 3,
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)// nome: "Juca" | idade: 3 \ raca: "SRD"
// console.log(gato) // nome: "Juba" | idade: 3 | raca: "SRD"
// console.log(tartaruga) // nome: "Jubo" | idade: 3 | raca: "SRD"

//b. faz uma cópia do objeto. Um spread.

//3.

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // {nome: "Caio" | idade: 23 | backender: false, [false]}
// console.log(minhaFuncao(pessoa, "altura")) // {nome: "Caio" | idade: 23 | backender: false, [undefined]}

/*b. não tinha entendido que ia selecionar a propriedade só. Mas pelo que entendi
vai imprimir só a propriedade, a primeira selecionou o value da key backender e na segunda
impressão imprimiu undefined por não ter a key de altura definida.*/

//Exerício Código ---------------------------------

// const pessoa = {
//     nome: "Rúbria",
//     apelidos: ["Ru", "Runi", "Ru Ru"]
// }

// function comoMeChamar(objeto, propriedade){
//     console.log("Eu sou", pessoa.nome, ', mas pode me chamar de:', pessoa.apelidos[0],",",pessoa.apelidos[1],"ou", pessoa.apelidos[2])
// }

// const pessoa2 = {...pessoa.apelidos = ["Rubi", "Quequél", "Amor"]}

// comoMeChamar(pessoa2)

//2.

// const pessoa1 = {
//     nome: "Rúbria",
//     idade: 30,
//     profissão: "UX/UI Designer"
// }

// const pessoa2 = {
//     nome: "Carol",
//     idade: 29,
//     profissão: "Química"
// }

// function minhaFuncao(pessoa){
//     const resultado = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissão, pessoa.profissão.length ]
//     return resultado
// }

// console.log(minhaFuncao(pessoa1))
// console.log(minhaFuncao(pessoa2))

//3.-----------------------------

// const carrinho = []

// const fruta1 = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Macarujá",
//     disponibilidade: true
// }

// function colocarNoCarrinho(fruta){
//     carrinho.push(fruta)
// }

// colocarNoCarrinho(fruta1)
// colocarNoCarrinho(fruta2)
// colocarNoCarrinho(fruta3)

// console.log(carrinho)

//Desafios-------------------------------

// function formulario() {
//     const nome = prompt("Digite seu nome")
//     const idade = Number(prompt("Digite sua idade"))
//     const profissao = prompt("Digite sua profissão")

//     console.log(objeto = {nome, idade, profissao})
// }

// formulario()
// console.log(typeof objeto)

//2.----------------

// const filme1 = {nome: "Matrix", lançamento: 2000}
// const filme2 = {nome: "Arrival", lançamento: 2016}

// function compararLançamento(filme1,filme2){
//     const comparaMaior = filme1.lançamento >= filme2.lançamento
//     const comparaIgual = filme1.lançamento === filme2.lançamento

//     return ["O primeiro filme foi lançado antes do segundo?" + comparaMaior, "O primeiro filme foi lançado no mesmo ano do segundo?" + comparaIgual]
// }

// console.log(compararLançamento(filme1,filme2))

//3.----------------------------------------

// const carrinho = []

// const fruta1 = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Macarujá",
//     disponibilidade: true
// }

// function colocarNoCarrinho(fruta){
//     carrinho.push(fruta)
// }

// function estoque(fruta){
//     return !fruta.disponibilidade
// }

// colocarNoCarrinho(fruta1)
// colocarNoCarrinho(fruta2)
// colocarNoCarrinho(fruta3)

// console.log(estoque(fruta1)) // console desafio
