const {Pokemon} = require('../db')

const createPokemonController = async ({name,type,image,hp,attack,defense}) =>{
  const newPokemon = await Pokemon.create({name,type,image,hp,attack,defense});
  return newPokemon;
}


module.exports = createPokemonController;