const { Pokemon } = require('../db')

const createPokemon = async ({name,types,image,hp,attack,defense}) =>{
  const pokemonDates = {name,type,image,hp,attack,defense};
  if(!pokemonDates) throw Error ('Debe ingresar datos validos');
    const newPokemon = await Pokemon.create({name,image,hp,attack,defense});
    newPokemon.addTypes(types);
    return newPokemon;
  
}


module.exports = createPokemon;