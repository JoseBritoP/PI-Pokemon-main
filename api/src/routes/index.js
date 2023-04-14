const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// http://localhost:3001/pokemons
router.use('/pokemons',pokemonsRouter);

// http://localhost:3001/types
router.use('/types',typesRouter);


module.exports = router;
