const { Pokemon , Type } = require('../db');
const axios = require('axios');

// Controllers del getPokemons

const getPokemonsApi = async (limit) => {
  // Este hará una petición a la api simplemente
  // Debo limitar a que traiga cierta cantidad de pokemons y almacenarlos
  // Agregar condicional si es que recibe un nombre la request o no
  let pokemon;

  pokemon = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
  ).data.results;

  const pokeApi = await Promise.all(
    pokemon.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      // console.log("Url del pokemon:",pokemon.url);
      return {
        id: pokemonData.data.id,
        name: pokemonData.data.species.name,
        types: pokemonData.data.types.map((type) => type.type.name),
        image: pokemonData.data.sprites.other.dream_world.front_default,
        hp: pokemonData.data.stats[0].base_stat,
        attack: pokemonData.data.stats[1].base_stat,
        defense: pokemonData.data.stats[2].base_stat,
        speed: pokemonData.data.stats[5].base_stat,
        height: pokemonData.data.height || null,
        weight: pokemonData.data.weight || null,
      };
    })
  );

  // console.log("Este es el objeto mapeado:", pokeApi);
  return pokeApi;
};

const getPokemonByName = async (name) => {

  // const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
  // .then(res => res.data.results);
  // const pokemon = allPokemon.find(pokemon => pokemon.name === name);

  // if (!pokemon) throw Error(`No se encontró el Pokemon con el nombre ${name}`);


  // const pokemonData = await axios.get(pokemon.url).then(res => res.data);

  // return {
  //   id: pokemonData.id,
  //   name: pokemonData.name,
  //   types: pokemonData.types.map(type => type.type.name),
  //   image: pokemonData.sprites.other.dream_world.front_default,
  //   hp: pokemonData.stats[0].base_stat,
  //   attack: pokemonData.stats[1].base_stat,
  //   defense: pokemonData.stats[2].base_stat,
  //   speed: pokemonData.stats[5].base_stat,
  //   height: pokemonData.height,
  //   weight: pokemonData.weight
  // };
};

// Este trairá los pokemons creados y almacenados en la bdd
const getPokemonsBDD = async () => {
  const pokemonBDD = await Pokemon.findAll(
    {include: {
      model: Type,
      attribute: ['name'],
      through:{
        attribute:[],
      }
    }}
  );
  if(!pokemonBDD) throw Error ('No existe un pokemon en la BDD')
  return pokemonBDD;
};

// Este traerá todos los pokemons, tanto de la api como los de la base de datos
const getAllPokemons = () => {
};

module.exports = {
  getPokemonsApi, getPokemonByName, getPokemonsBDD, getAllPokemons
}