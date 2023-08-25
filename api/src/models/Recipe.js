//ESTE ARCHIVO DEFINE EL MODELO RECIPE QUE SE UTILIZARÁ EN LA BASE DE DATOS

const { DataTypes } = require('sequelize'); //Se importa el objeto DataTypes de la biblioteca Sequelize, que se utiliza para definir los tipos de datos de los campos en los modelos 
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // set(value){
      //   this.setDataValue("title",value.toLowerCase())
      // }
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore:{
      type: DataTypes.FLOAT
    
    },
    image: {
      type: DataTypes.STRING
    },
    step: {
      type: DataTypes.TEXT
    },
    
    
  },{timestamps: false});
};


  
/*
? Exporta una función anónima que toma un objeto sequelize como parámetro
? Utiliza el método define proporcionado por Sequelize para definir el modelo "Recipe" en la base de datos.
? Define los campos del modelo "Recipe" con sus respectivos tipos de datos y restricciones.
? Se establece timestapms deshabilitando automáticamente los campos de marca de tiempo (createdAt y updatedAt) en el modelo "Recipe".
*/

