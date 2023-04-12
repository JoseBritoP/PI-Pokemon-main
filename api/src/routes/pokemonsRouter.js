const { Router } = require('express')
const getDetailPokemon = require('../controllers/getDetailPokemon')

const pokemonsRouter = Router();


// http://localhost:3001/pokemons/
pokemonsRouter.get('/',(req,res)=>{
  const {name} = req.query;
  
  res.status(200).send('Traerá todos los pokemones')
})

pokemonsRouter.get('/:id',(req,res)=>{
  const {id} =  req.params;
  res.status(200).send(`Traerá el detalle de un pokemon en especifico de id: ${id}`)
})


