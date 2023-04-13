const { Router } = require('express')

// Handlers
const {getPokemons,getPokemon, createPokemon} = require('../handlers/pokemonsHandlers')

const pokemonsRouter = Router();

// Rutas -> Link
pokemonsRouter.get('/',getPokemons)
// http://localhost:3001/pokemons/

pokemonsRouter.get('/:id',getPokemon)
// http://localhost:3001/pokemons/:id
pokemonsRouter.post('/',createPokemon)
// http://localhost:3001/pokemons/


module.exports = pokemonsRouter;