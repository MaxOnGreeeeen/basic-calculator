import React from 'react';

const ClearButton = (props) => {
    return (

        <div className = "button-1 button-2"
            onClick = {() => props.onClick(props.handleClear)}>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default ClearButton;