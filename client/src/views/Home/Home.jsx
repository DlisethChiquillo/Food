import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRecipes} from "../../redux/actions";


import Cards from "../../components/Cards/Cards";

function Home(){
    const dispatch = useDispatch();
    const allRecipes = useSelector((state)=> state.allRecipes);

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch]);

    return(
        <div>
            <p>estas en el Home</p>
            <Cards allRecipes={allRecipes}/>
        </div>
    )
}

export default Home;