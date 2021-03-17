import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer(){

    const numOfCakes = useSelector( state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Num of cakes with hooks - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
        </div>

    )
}

export default HooksCakeContainer