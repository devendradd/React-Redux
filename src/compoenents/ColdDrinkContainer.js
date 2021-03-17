import React from 'react';
import { connect } from 'react-redux';
import { buyColdDrink } from '../redux';

function ColdDrinkContainer(props) {
    return (
        <div>
         <h2> Number of cakes with connect - {props.numOfColdDrinks}</h2>
         <button onClick={props.buyColdDrink}> Buy cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfColdDrinks: state.coldDrink.numOfColdrinks
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyColdDrink: () => dispatch(buyColdDrink())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColdDrinkContainer);