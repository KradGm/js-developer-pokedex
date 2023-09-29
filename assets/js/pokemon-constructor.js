const pokemonList = document.getElementById('pokemonInfo')

const maxRecords = 151
const limit = 10
let offset = 0;
 const constructor = {};
 function createPokemon(name, type , number){
    console.log("Teste");
    console.log(name);
    console.log(type);
    console.log(number);
 }
// function convertPokemonToLi(pokemon) {
//     return `
//     <a href=pokemonInfo/>
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                      alt="${pokemon.name}">
//             </div>
//         </li>
//     </a>
//     `
// }

// function loadPokemonItens(offset, limit) {
//     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//         const newHtml = pokemons.map(convertPokemonToLi).join('')
//         pokemonList.innerHTML += newHtml
//     })
// }

// loadPokemonItens(offset, limit)
