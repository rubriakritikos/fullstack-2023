const concluiEnsinoMedio = true
const maiorDe18Anos = false
// Se eu quiser que as 2 coisas sejam verdade , eu uso o comparador E (&&)
if(concluiEnsinoMedio && maiorDe18Anos){
    console.log("Voce pode se matricular na faculdade")
}else{
    console.log("Nao pode !")
}
// Se eu quiser que só 1 coisa seja verdade , eu uso o comparador OU (||)
if(concluiEnsinoMedio || maiorDe18Anos){
    console.log("Voce pode se matricular na faculdade")
}else{
    console.log("Nao pode !")
}