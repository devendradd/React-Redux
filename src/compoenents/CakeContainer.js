import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
         <h2> Number of cakes {props.numOfCakses}</h2>
         <button onClick={props.buyCake}> Buy cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakses: state.numOfCakses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)