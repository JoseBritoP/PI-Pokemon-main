const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon',
  {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed:{
      type: DataTypes.STRING,
    },
    heigth:{
      type: DataTypes.STRING,
    },
    weight:{
      type: DataTypes.STRING,
    },
    createInBD:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    createdAt: false,
    updatedAt: false,
  })
};