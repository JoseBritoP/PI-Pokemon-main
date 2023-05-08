const getTypesPokemons = require('../controllers/getTypesPokemon')

const getType = (req,res) =>{
  try {
    const types = getTypesPokemons();
    res.status(200).json(types);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

module.exports = getType;