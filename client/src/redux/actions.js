import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export function getRecipes(){
    return async function (dispatch) {
        const response = await axios (`http://localhost:3001/recipes`);
        const allRecipes= response.data;
        dispatch({
            type: "GET_RECIPES",
            payload: allRecipes
        });
    };
}