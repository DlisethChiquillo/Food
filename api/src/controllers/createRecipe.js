const { Recipe, Diets} = require("../db");


const postRecetaCrear = async ({name, summary, healthScore, step, image, diet}) => {//tomo objeto desestructurado como argumento
    const [newRecipe, created] = await Recipe.findOrCreate({
    //const selectedDiets = await Diets.findAll({
        where: {name},
        defaults: {name, summary, healthScore, step, image, diet},
    })
        
    if(created === true){
        
            const dietId =(await Diets.findAll({
                where:{
                    name:diet
                }
            }))
            await newRecipe.setDiets(dietId)
        

        return Recipe.findOne({
            where:{id: newRecipe.id},
            include:[
                {model: Diets, attributes: ["name"], through: { attributes: [] }}]
        })
    }

    
    
};


module.exports = { postRecetaCrear}


// await recipeToAdd.addDiets(selectedDiets);//asocio generos encontrados a juego creado 
// const relationRecipe = await Recipe.findOne({//busco juego recien creado por ID
//     where: { id: recipeToAdd.id },
//     include: [{ model: Diets, attributes: ["name"], through: { attributes: [] } }],
// });














