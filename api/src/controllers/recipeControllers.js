// en este archivo voy a obtener todas las recetas, tanto de la Api como de la DB
//Esta configuración es para traer la apikey del archivo .env
require('dotenv').config();
const {apiKey} = process.env;
 // ------------------------------------------------------------


 //------------  IMPORTACIONES  -------------
 const axios = require('axios')
 const {Recipe,Diets} = require('../db');
const { Op } = require("sequelize"); //se utiliza para realizar operaciones en la base de datos, como busquedas parciales con iLike



 
 const recipeNameAll = async(name)=>{ //defino una funcion que recibe un argumentos, esta funcion se encarga de buscar y obtener detalles de recetas 
    let responseApi,responseBD

//! ********************     PEDIDO DE DATOS     ********************
    if(name!==undefined){ //proporciono un name si no es undefined se realiza busque en la api y base de datos,

        const nameminus= name.toLowerCase()

        // ********************     API     ********************
            responseApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${nameminus}&number=100&addRecipeInformation=true`);
            responseApi = responseApi.data.results;

        // ********************     BD     ********************
            responseBD = await Recipe.findAll({
                where: {name: {
                    [Op.iLike]: `%${nameminus}%`
                }},
                include:{
                        model:Diets, 
                        attributes:["name"]}
                    });
            responseBD = await responseBD  //// es una promesa por lo tanto await
    }

    else{
        // ********************     API     ********************
            responseApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`);
            
            responseApi= await responseApi.data.results


        // ********************     BD     ********************
            responseBD = await Recipe.findAll({
                    include:{
                            model:Diets, 
                            attributes:["name"]}
                        });
            responseBD = await responseBD  //// es una promesa por lo tanto await

            }


 
  //! ********************     MODIFICANDO LOS DATOS     ********************
        // ********************     API     ********************
        
    let dataApi=responseApi.map(ele=>{   


       // let datosIngredientes=[]
        //let datosequipment=[]
        const retornarData ={


            id:ele?.id,
            name:ele?.name,
            image:ele?.image,
            healthScore:ele?.healthScore,
            summary:ele?.summary,
            // instructions:ele.analyzedInstructions[0]?.steps.map(step =>step.step),
            // ingredients:ele.analyzedInstructions[0]?.steps.map(ele =>ele.ingredients.map(ele=>ele).map(ele=>{
            //     if(datosIngredientes.indexOf(ele.name)===-1) datosIngredientes.push(ele.name)
            //     return datosIngredientes

                
            // })),

            // equipment:(ele.analyzedInstructions[0]?.steps.map(ele =>ele.equipment).filter(ele=>ele.length!==0).map(ele=>ele.map(ele=>{
            //     if(datosequipment.indexOf(ele.name)===-1) datosequipment.push(ele.name)
            //     return datosequipment
            // }))),


            
            diets:ele?.diets,
        }
        return retornarData
    })


        // ********************     BD     ********************
    let dataBD=responseBD.map(ele=>{
        const valoresFinale ={
            id:ele.dataValues?.id,
            name:ele.dataValues?.name,
            image:ele.dataValues?.image ,
            healthScore:ele.dataValues?.healthScore,
            summary:ele.dataValues?.summary,
            // instructions:ele.dataValues?.instructions,
            // ingredients:ele.dataValues?.ingredients,
            // equipment:ele.dataValues?.equipment,
            diets:ele.dataValues?.diets.map(ele=>ele.name)
        }
        return valoresFinale
    })

    return [...dataApi,...dataBD]
 }
 


 
 
 
 
 module.exports={recipeNameAll,}
 
 
 
 
 


















 // `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${API_KEY}`
 
 
 
 //`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${API_KEY}&addRecipeInformation=true&number=60`
 
 
 //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true` x name
 
 
 //`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&addRecipeInformation=true` x id




