const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon',
  {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    attack:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    defense:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    speed:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    heigth:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createInBD:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    timestamps: false,
  })
};