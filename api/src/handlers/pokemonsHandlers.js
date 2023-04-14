

const getPokemons = (req,res)=>{
  const { name } = req.query;
  if(name){
    res.status(200).send(`Traerá todos los pokemones que se llamen ${name} si es que existe`)
  } else {
    res.status(200).send('Traerá todos los pokemones')
  }
};

const getPokemon = (req,res)=>{
  const {id} =  req.params;
    res.status(200).send(`Traerá el detalle de un pokemon en especifico de id: ${id}`)
};

const createPokemon = async (req,res)=>{
  const {name,type,image,hp,attack,defense} = req.body
  try {
    const newPokemon = await createPokemonController({name,type,image,hp,attack,defense})
    // res.status(201).send(`Estoy por crear un pokemon con los siguientes datos:
    // name: ${name}
    // type: ${type}
    // sprite:${image}
    // hp: ${hp}
    // attack : ${attack}
    // defense: ${defense}
    // `)
    res.status(201).json(newPokemon)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getPokemons, getPokemon, createPokemon
}