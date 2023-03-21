const pokemon1 = {
    nome: "bulbasauro",
    tipo: "grama"
}
const pokemon2 = {
    nome: "Charmander",
    tipo: "fogo"
}

const pokemon3 = {
    nome: "Squirtle",
    tipo: "agua"
}

const pokemon4 = {
    nome: "Picachu",
    tipo: "raio"
}


function comparaPokemon(pokemon) {

    switch (pokemon.nome) {
        case "bulbasauro":
            console.log(`${pokemon.nome} é do tipo ${pokemon.tipo}`)
            break;
        case "Charmander":
            console.log(`${pokemon.nome} é do tipo ${pokemon.tipo}`)
            break;
        case "Squirtle":
            console.log(`${pokemon.nome} é do tipo ${pokemon.tipo}`)
            break;
        default:
            console.log(`${pokemon.nome} não é oque eu estou procurando`)
            break;
    }
}

comparaPokemon(pokemon1)
comparaPokemon(pokemon2)
comparaPokemon(pokemon3)
comparaPokemon(pokemon4)