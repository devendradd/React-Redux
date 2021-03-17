import {BUY_CAKE} from "./cakeActionTypes"

const initialState = {
    numOfCakses: 10
}


const cakeReducer = (state=initialState, action) => {
      switch(action.type){
          case BUY_CAKE: 
                return{
                    ...state,
                    numOfCakses: state.numOfCakses - 1 
                }
            default :
                return state;
    
      }
}

export default cakeReducer;