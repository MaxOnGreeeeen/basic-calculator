import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    let className = classes.button1
    if (props.isBracket) className = classes.dropdownContent
    else if(props.isExecute) className = classes.button2
    return (
        <div className = {className}
            onClick = {() => props.onClick(props.children)}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Button;