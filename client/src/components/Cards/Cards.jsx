import Card from "../Card/Card";
import style from "./Cards.module.css"

function Cards({allRecipes}){
    const recipesList = allRecipes
    return(
        <div className={style.cardList}>
            
{recipesList?.map((recipes) =>(
   < Card 
   key={recipes.id}
   id={recipes.id}
   title={recipes.title}
   image={recipes.image}
   diets={recipes.Diets}
/>))}

        </div>
    )
}

export default Cards;