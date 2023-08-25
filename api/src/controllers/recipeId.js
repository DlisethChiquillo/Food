//Esta configuración es para traer la apikey del archivo .env


require('dotenv').config(); // utilizamos la biblioteca dotenv para traer archivos del .env
const {apiKey} = process.env; //traemos la variable apiKey del archivo .env
 // ------------------------------------------------------------

const axios = require('axios') //importo axios para hacer solicitudes HTTP
const {Recipe,Diets} = require('../db')


const byForId =async(id)=>{ // se define una funcion que acepta un arg (id)  y realiza la obtencion de la receta de ese id 
    
    let dataId
                              // +++++++++  BD   +++++++++++
    if(isNaN(id)){ // 
        let response = await Recipe.findByPk(id,{ // utilizo el modelo Recipe para buscar una receta por su id
            include:{
                model:Diets, 
                attributes:["name"]}
            })
            //include: [Diets]// e incluyo informacion de las dietas asociadas a la receta
            //model: [Diets], 
                //attributes:["name"]}
            
        response = await response  //// es una promesa por lo tanto await: La respuesta de la base de datos es una promesa, por lo que se está esperando a que se resuelva. Si la respuesta tiene un título (lo que sugiere que se encontró la receta en la base de datos), se extraen varios detalles relevantes y se forma un objeto dataId con esos detalles.

        //if(response){

        
            if(response.dataValues.name){
                dataId ={
                id:response.dataValues?.id,
                name:response.dataValues?.name,
                image:response.dataValues?.image ,
                healthScore:response.dataValues?.healthScore,
                summary:response.dataValues?.summary,
                instructions:response.dataValues?.instructions,
                ingredients:response.dataValues?.ingredients,
                equipment:response.dataValues?.equipment,
                diets:response.dataValues.diets?.map(ele=>ele.name)
            }
        return dataId
        }
    }else{

        let responseApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&addRecipeInformation=true`);
        responseApi = await responseApi.data; //La respuesta de la solicitud HTTP es un objeto que contiene diversos datos, pero aquí se está extrayendo el contenido de la respuesta utilizando .data. Luego, se reasigna el valor de responseApi con estos datos. Ahora responseApi contiene los detalles de la receta obtenidos de la API.
    

    // ********************     API     ********************
    


 
       if(responseApi.name){ //verifico si la propiedad name existe en la respuesta, lo que indica que se ha obtenido informacion de la receta, si existe se procesa y estructura la informacion de un obejto dataId que contiene los siguietnes detalles
        
           dataId = {
            //const recipeApi = {
                id: responseApi?.id, // id de la receta
                name: responseApi?.name, //titulo de la receta
                image: responseApi?.image, //la url de la imgage
                healthScore:responseApi?.healthScore, //la puntuacion de la salud
                summary:responseApi?.summary.replace(/<[^>]+>/g, ''), //el resument de la receta con las etiquetas html eliminadas usando una expresion regular 
                instructions: responseApi.analyzedInstructions[0]?.steps.map(ele=>ele).map(ele=>ele.step), // ur array de instrucciones para prepara la receta extraido de los pasos analizados 

                diets:responseApi?.diets // un array de dietas acosiciadas a la receta
            };
        return dataId  // devolucion del objeto dataId
}
}
}

module.exports = {byForId}



//En resumen, este fragmento de código realiza una solicitud a la API de Spoonacular para obtener detalles de una receta en función del id proporcionado. Luego, procesa la respuesta de la API, extrae los detalles relevantes y los estructura en un objeto dataId que se devuelve para su uso posterior.
