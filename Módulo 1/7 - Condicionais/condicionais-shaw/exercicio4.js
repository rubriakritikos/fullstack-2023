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

    switch (obj.genero) {
        case "feminino":
            console.log(`bem-vinda , ${obj.nome}`)
            break;
        case "masculino":
            console.log(`bem-vindo , ${obj.nome}`)
            break;
        default:
            console.log(`Desejamos boas-vindas , ${obj.nome}`)
    }
}

receberObjeto(feminino)
receberObjeto(masculino)
receberObjeto(outro)

