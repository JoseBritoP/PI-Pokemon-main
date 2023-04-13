const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getPokemonByID = async (id) =>{

  let pokemon = {};

      const api = `https://pokeapi.co/api/v2/pokemon/${id}`
      const response = await axios.get(api);
      const pokeApi = response.data;
      const pokemonDetail = {
        id: pokeApi.id,
        name: pokeApi.name,
        image: pokeApi.sprites.other.dream_world.front_default,
        hp: pokeApi.stats[0],
        attack: pokeApi.stats[1],
        defense: pokeApi.stats[2],
        speed: pokeApi.stats[5],
        heigth: pokeApi.heigth || null,
        weight: pokeApi.weight || null
      }
    return pokemonDetail

}


module.exports = getPokemonByID;