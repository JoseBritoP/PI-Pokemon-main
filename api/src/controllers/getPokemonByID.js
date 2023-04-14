const axios = require('axios');
const { Pokemon, Type } = require('../db');


const getPokemonByID = async (id,source) =>{
let pokemon;
if(source === "api"){
  pokemon = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
    .data;
  const pokeApi = {
    id: pokemon.id,
    name: pokemon.species.name,
    types: pokemon.types.map((type)=>type.type.name),
    image: pokemon.sprites.other.dream_world.front_default,
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
    height: pokemon.height || null,
    weight: pokemon.weight || null
  };
  return pokeApi;
} 
else {
  pokemon = await Pokemon.findByPk(id,{
    include:{
      model:Type,
      attributes: ['name'],
    },
  });
}
if(!pokemon) throw Error ('El pokemon no existe');
return pokemon;
}
module.exports = getPokemonByID;
