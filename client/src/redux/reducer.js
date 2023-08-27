import {GET_RECIPES} from "./actions"

let initialState = {allRecipes: [],};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_RECIPES:
            const allRecipes = action.payload
            return {

                ...state,
                allRecipes: [...allRecipes]
            };

            default:
                return {...state};
    }
}

export default rootReducer;