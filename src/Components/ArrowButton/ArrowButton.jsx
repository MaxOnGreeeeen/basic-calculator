import React from 'react';
import classes from './Arrow.module.css'
const ArrowButton = (props) => {

    return (
        <div className = {classes.button2}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ArrowButton;