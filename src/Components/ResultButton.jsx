import React from 'react';

const ResultButton = (props) => {

    const increaseValue = () =>{

    }

    const dicreaseValue = () =>{

    }

    return (
        <div className = "button-1 button-2"
            onClick = {() => props.onClick(eval(props.finalResult))}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ResultButton;