import React from 'react';
import classes from './Result.module.css'
const ResultButton = (props) => {

    return (
        <div className = {classes.button2}
            onClick = {() => props.onClick(props.children)}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ResultButton;