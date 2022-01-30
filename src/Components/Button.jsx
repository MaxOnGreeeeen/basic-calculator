import React from 'react';

const Button = (props) => {
    return (
        <div className = "button-1"
            onClick = {() => props.onClick(props.children)}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Button;