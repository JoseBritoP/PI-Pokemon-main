const createPokemonController = require('../controllers/createPokemon');
const getPokemonByID = require('../controllers/getPokemonByID');


const getPokemons = (req,res)=>{
  const { name } = req.query;
  if(name){
    res.status(200).send(`Traerá todos los pokemones que se llamen ${name} si es que existe`)
  } else {
    res.status(200).send('Traerá todos los pokemones tanto de los la api como los de la bdd')
  }
};


const getPokemon= async (req,res)=>{
  const {id} =  req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const pokemon = await getPokemonByID(id,source)
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


const createPokemon = async (req,res)=>{
  const {name,type,image,hp,attack,defense} = req.body
  try {
    const newPokemon = await createPokemonController({name,type,image,hp,attack,defense})
    res.status(201).json(newPokemon)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getPokemons, getPokemon, createPokemon
}