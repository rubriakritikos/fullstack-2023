const feminino = {
    nome: "ciclana",
    genero: "feminino"
}

const masculino = {
    nome: "fulano",
    genero: "masculino"
}

const outro = {
    nome: "beltrano",
    genero: "outro"
}

function receberObjeto(obj) {

    if (obj.genero === "feminino") {
        return `bem-vinda , ${obj.nome}`
    } else if (obj.genero === "masculino") {
        return `bem-vindo , ${obj.nome}`
    }else{
        return `Desejamos boas-vindas , ${obj.nome}`
    }

}

console.log(receberObjeto(feminino))
console.log(receberObjeto(masculino))
console.log(receberObjeto(outro))