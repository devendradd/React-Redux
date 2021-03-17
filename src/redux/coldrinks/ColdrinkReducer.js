import { BUY_COLDDRINK } from "./ColdrinkActionTypes";

const initialState = {
    numOfColdrinks : 30
};


const coldDrinkReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_COLDDRINK:
            return {
                ...state,
                numOfColdrinks: state.numOfColdrinks - 1
            };             
        default: 
            return state;
    }
}

export default coldDrinkReducer;