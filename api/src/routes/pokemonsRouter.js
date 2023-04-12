const { Router } = require('express')

// Handlers
const {getPokemonsHandler,getDetailPokemonHandler, createPokemon} = require('../handlers/pokemonsHandlers')

const pokemonsRouter = Router();

// Rutas -> Link
pokemonsRouter.get('/',getPokemonsHandler)
// http://localhost:3001/pokemons/

pokemonsRouter.get('/:id',getDetailPokemonHandler)
// http://localhost:3001/pokemons/:id
pokemonsRouter.post('/',createPokemon)
// http://localhost:3001/pokemons/


module.exports = pokemonsRouter;