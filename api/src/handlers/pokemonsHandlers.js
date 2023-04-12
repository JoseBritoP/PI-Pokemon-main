
const getPokemonsHandler = (req,res)=>{
  const {name} = req.query;
  if(name){
    res.status(200).send(`Traerá todos los pokemones que se llamen ${name} si es que existe`)
  } else {
    res.status(200).send('Traerá todos los pokemones')
  }
}

const getDetailPokemonHandler = (req,res)=>{
  const {id} =  req.params;
  res.status(200).send(`Traerá el detalle de un pokemon en especifico de id: ${id}`)
}

const createPokemon = (req,res)=>{
  const {name,type,sprite} = req.body
  res.status(200).send(`Estoy por crear un pokemon con los siguientes datos:
  name: ${name},type: ${type},sprite:${sprite}`)
}

module.exports = {
  getPokemonsHandler, getDetailPokemonHandler, createPokemon
}