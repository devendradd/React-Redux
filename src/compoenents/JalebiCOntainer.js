import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyJalebi }  from '../redux';


function JalebiCOntainer(){

    const numOfJalebi = useSelector(state => state.jalebi.numOfJalebi);
    const dispatch = useDispatch()
    return(
        <div>
            <h1>
                Jalebi count : {numOfJalebi}
            </h1>
            <button onClick={() => dispatch(buyJalebi())}>
                Buy Jalebi
            </button>
        </div>
    ); 
}

export default JalebiCOntainer;