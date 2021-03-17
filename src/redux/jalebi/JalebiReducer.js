import { BUY_JALEBI } from "./JalebiActionTypes";

const initialState={
    numOfJalebi: 40
}

const jalebiReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_JALEBI:
            return{
                ...state,
                numOfJalebi: state.numOfJalebi - 1
            }
        default :
            return state;
    }
}

export default jalebiReducer;