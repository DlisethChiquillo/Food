const { byForId } = require('../controllers/recipeId'); //importamos la funcion para el (id) del controllers  --- Este controlador esta encargado de obtener detalles de una receta según su ID.


const recipeId = async(req,res)=>{ //defino una funcion que acepta dos params(req, res), esta funcion maneja las solicitudes de detales de las recetas basadas en su id 
    const { id } = req.params; //extraigo el valor del parametro (id) 

try {
    const recipe = await byForId(id);
    res.status(200).json(recipe);

}catch(error){
    res.status(400).json({error: error.message})
}


}


module.exports ={ recipeId} //se exporta el controlador recipeId para que pueda ser utilizado por otros módulos en la aplicación.

//En resumen, este código define un controlador para manejar las solicitudes de detalles de recetas basadas en un ID. Dependiendo de si el ID es un número o no, la función decide si buscar la receta en una base de datos o en algún otro lugar (como una API) y devuelve los detalles correspondientes en forma de respuesta JSON. Si no se encuentra la receta o se produce algún error, se devuelve una respuesta de error adecuada.