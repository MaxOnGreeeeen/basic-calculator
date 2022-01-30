import React from 'react';

const ArrowButton = (props) => {

    return (
        <div className = "button-1 button-2"
            onClick = {() => props.onClick(eval(props.finalResult))}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ArrowButton;