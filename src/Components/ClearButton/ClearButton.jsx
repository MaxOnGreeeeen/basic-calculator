import React from 'react';
import classes from './Clear.module.css'
const ClearButton = (props) => {
    return (
        <div className = {classes.button2}
            onClick = {() => props.onClick(props.handleClear)}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ClearButton;