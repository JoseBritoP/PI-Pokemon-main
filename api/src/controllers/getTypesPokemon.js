const { Type } = require('../db')
const axios = require('axios');

const getTypesPokemons = async () =>{
  try {
    const bddData = await Type.findAll();
    if(bddData.length === 0){
      const apiData = await axios.get('https://pokeapi.co/api/v2/type');
      const dataTypes = apiData.data.results.map((type)=>{return {name:type.name}});
      // console.log(dataTypes);
      const newTypes = await Type.buildCreate(dataTypes);
      return newTypes;
    }
  } catch (error) {
    throw Error(error);
  }
}

module.exports = getTypesPokemons;