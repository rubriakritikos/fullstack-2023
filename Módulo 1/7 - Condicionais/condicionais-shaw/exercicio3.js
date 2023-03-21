const a = Number(prompt("digite um numero: ?"))
const b = Number(prompt("digite outro numero: ?"))


function compara2Numeros(numero1,numero2){

    if(numero1 > numero2){
        console.log(`o ${numero1} é maior que o ${numero2}`)
    }else if(numero2 > numero1){
        console.log(`o ${numero1} é menor que o ${numero2}`)
    }else{
        console.log(`o ${numero1} é igual ao  ${numero2}`)
    }
    
}
compara2Numeros(a,b)