const { Router } = require('express')

// Handlers

const { getPokemons, getPokemon, createPokemon } = require('../handlers/pokemonsHandlers.js')

const pokemonsRouter = Router();

// Rutas -> Link
// http://localhost:3001/pokemons/
pokemonsRouter.get('/',getPokemons);

// http://localhost:3001/pokemons/:id
pokemonsRouter.get('/:id',getPokemon);

// http://localhost:3001/pokemons/
pokemonsRouter.post('/',createPokemon);


module.exports = pokemonsRouter;