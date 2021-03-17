import { createStore, combineReducers } from 'redux';
import cakeReducer  from './cake/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';
import coldDrinkReducer from './coldrinks/ColdrinkReducer';
import jalebiReducer from './jalebi/JalebiReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    coldDrink: coldDrinkReducer,
    jalebi: jalebiReducer
})

const store = createStore(rootReducer);

export default store;