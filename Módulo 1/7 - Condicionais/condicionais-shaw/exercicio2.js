const a = Number(prompt("digite um numero: ?"))
const b = Number(prompt("digite outro numero: ?"))

function compara2Numeros(numero1,numero2){

    if(numero1 === numero2){
        return "Os numeros são iguais!"
    }else{
        return "os numeros são diferentes"
    }
}

console.log(compara2Numeros(a,b))