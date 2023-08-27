const {DataTypes} = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      // unique: true,
      // set(value){
      //   this.setDataValue("name",value.toLowerCase())
      // }
    }
  },{timestamps: false});
};

































//set(value){: Aquí comienza la definición de un setter personalizado para el atributo "title". Un setter es una función que se ejecuta cuando se intenta establecer un valor en el atributo. En este caso, el setter se llama cuando se intenta establecer un valor en el atributo "title".

//this.setDataValue("title",value.toLowerCase()): Dentro del setter, se utiliza setDataValue para establecer el valor del atributo "title" en la instancia del modelo. value.toLowerCase() se usa para convertir el valor a minúsculas antes de almacenarlo. Esto asegura que el título se almacene en minúsculas independientemente de cómo se haya proporcionado inicialmente.

//}: Cierra el bloque del setter.

//En resumen, este código define un atributo "title" en un modelo de base de datos y asegura que cualquier valor proporcionado para ese atributo se almacene en minúsculas en la base de datos. Esto puede ser útil para normalizar los datos y garantizar la coherencia en el manejo de títulos, evitando problemas como duplicados de registros debido a diferencias en mayúsculas y minúsculas.