import style from "./Card.module.css"

function Card ({title, image, diets = []}) {
  
    return(
        <div className={style.cardContainer}>
            <h1>{title}</h1>
             <img src={image}alt ={title}/> 
             <ul>
                {diets.map((diet, index)=>(
                    <li key={index}>{diet.title}</li>
                ))}
                </ul>   

        </div>
    )
}

export default Card;