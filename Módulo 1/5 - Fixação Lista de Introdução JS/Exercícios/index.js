//1.-------------------------------------------

// const altura = 3
// const largura = 5

// const areaRetangulo = altura * largura

// console.log(areaRetangulo)

//2.------------------------------------------

// function calculaIdade(){
//     const anoAtual = Number(prompt("Digite o ano atual!"))
//     const anoNascimento = Number(prompt("Digite o seu ano de nascimento!"))

//     console.log(anoAtual - anoNascimento)
// }

// calculaIdade()

//3.-------------------------------------------

// function calculaIMC(peso, altura){
//     return peso / (altura * altura)
// }

// console.log(calculaIMC(85,1.8))

//4.--------------------------------------------

// function formulario(){
//     const nome = prompt("Digite seu nome!")
//     const idade = Number(prompt("Digite sua idade!"))
//     const email = prompt("Digite seu email!")

//     console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
// }

// formulario()

//5.-------------------------------------------------

// function coresFavoritasUsuario(){
    
//     const cor1 = prompt("Qual sua primeira cor favorita?")
//     const cor2 = prompt("Qual sua segunda cor favorita?")
//     const cor3 = prompt("Qual sua terceira cor favorita?")
//     const array = [cor1, cor2, cor3]

//     console.log(array)
// }

// coresFavoritasUsuario()

//6.-----------------------------------------------------

// function maiusculo(string){
//     return string.toUpperCase()
// }

// console.log(maiusculo("ela é bonita"))

//7.------------------------------------------------------

// function vendaNecessária(custo, valorIngresso){
//     return custo / valorIngresso
// }

// console.log(vendaNecessária(3000, 100))

//8.-------------------------------------------------------

// function compararTamanhoStrings(string1, string2){
//     return string1.length === string2.length
// }

// console.log(compararTamanhoStrings("abc", "abcde"))

//9.------------------------------------------------------------

// function primeiroElemento(){
//     numeros = [1,2,3]
//     return numeros[0]
// }

// function primeiroElemento2(){
//     frutas = ["Laranja", "Banana", "Maçã"]
//     return frutas[0]
// }

// console.log(primeiroElemento())
// console.log(primeiroElemento2())

//10.----------------------------------------------------------------

// function ultimoElemento(){
//     numeros = [1, 2, 3, 4, 5]
//     return numeros[numeros.length - 1]
// }

// function ultimoElemento2(){
//     frutas = ["Laranja", "Banana", "Maçã"]
//     return frutas[frutas.length - 1]
// }

// console.log(ultimoElemento())
// console.log(ultimoElemento2())

//11.----------------------------------------------------------------

// function trocarElementos(){
//     meuArray = ["Laranja", "Banana", "Maçã"]
//     return meuArray.reverse()
// }

// console.log(trocarElementos())

//12.-----------------------------------------------------------------

// function compararString(string1, string2){
//     return string1.toLowerCase() == string2.toLowerCase()
// }

// console.log(compararString("Ola", "olA"))
// console.log(compararString("bananinha", "BANANINHA"))
// console.log(compararString("banana", "BANANINHA")) 

//13.---------------------------------------------------------------------

// function verificarRenovacaoCarteiraID(){
//     const anoAtual = Number(prompt("Digite o ano atual"))
//     const anoNascimento = Number(prompt("Digite o ano em que você nasceu"))
//     const anoEmissao = Number(prompt("Digite o ano de emissao da sua carteira de identidade"))

    // console.log(anoAtual - anoNascimento)
    // console.log(anoAtual - anoNascimento <= 20)
    // console.log(anoAtual - anoEmissao >= 5) //coringuei

    // if (anoAtual - anoNascimento <= 20 && anoAtual - anoEmissao >= 5) {
    //     console.log("Precisa renovar a carteira de identidade")
    // } else if(anoAtual - anoNascimento > 20 && anoAtual - anoNascimento < 50 && anoAtual - anoEmissao >= 10) {
    //     console.log("Precisa renovar a carteira de identidade") 
    // } else if(anoAtual - anoNascimento >= 50 && anoAtual - anoEmissao >= 15) {
    //     console.log("Precisa renovar a carteira de identidade")
    // } else{
    //     console.log("Não precisa renovar a carteira de identidade")
    // }
    
    // console.log(anoAtual - anoNascimento <= 20 && anoAtual - anoEmissao >= 5)
    // console.log((anoAtual - anoNascimento > 20 && anoAtual - anoNascimento < 50) && anoAtual - anoEmissao >= 10)
    // console.log(anoAtual - anoNascimento >= 50 && anoAtual - anoEmissao >= 15)
// }

// verificarRenovacaoCarteiraID()

//14.----------------