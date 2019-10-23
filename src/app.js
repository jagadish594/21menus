import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <div>
            <h1>Hello World!!!</h1>
            <h2>{props.age}</h2>
            <button onClick={props.onAgeUp}>Age Up</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        age: state.age
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAgeUp: () =>
            dispatch({
                type: 'AGE_UP',
                value: 1
            })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

App.propTypes = {
    age: PropTypes.number,
    onAgeUp: PropTypes.func
};
