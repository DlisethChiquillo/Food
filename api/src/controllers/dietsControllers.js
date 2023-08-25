//Esta configuración es para traer la apikey del archivo .env
require('dotenv').config();
const {apiKey} = process.env;
 // ------------------------------------------------------------

 const axios = require('axios')


 //! FUNCION PARA CREAR EL ARRAY CON LOS TIPOS DE DIETAS
 const typesDiets = async()=>{

    const tiposDieta =[]

    const dieta = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`)

    const valor =dieta.data.results

    // **********************************    DIETAS SUELTAS    **********************************
    valor.map(prop=>{
        
        const arrayOfkeys = Object.keys(prop)
        const filterDiet = arrayOfkeys.filter(typediet=>typediet==='vegetarian'||typediet==='vegan'||typediet==='gluten free'||typediet==='dairy free')
      
        filterDiet.map(elemen=>{
            if(tiposDieta.indexOf(elemen)===-1) tiposDieta.push(elemen)
        })

    })

    
    valor.map(element=>{
        element.diets.map(ele=>{
            if(tiposDieta.indexOf(ele)===-1) tiposDieta.push(ele) 
        })
    }) 

    // ************************    RETORNA TODO EL ARRAY DE DIETAS    ************************
    return tiposDieta.sort()

 }

 module.exports={typesDiets}