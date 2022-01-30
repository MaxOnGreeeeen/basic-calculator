import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className = {classes.result}>
            {props.input}
        </div>
    );
};
export default Input;