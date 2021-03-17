import { createStore, combineReducers } from 'redux';
import cakeReducer  from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import coldDrinkReducer from './coldrinks/ColdrinkReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    coldDrink: coldDrinkReducer
})

const store = createStore(rootReducer);

export default store;