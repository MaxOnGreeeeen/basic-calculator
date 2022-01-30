import React from 'react';

const ExecuteButton = (props) => {
    return (
        <div
        className = "button-1 button-2"
        onClick = {() => props.onClick(props.children)}>
        {props.children}
        </div>
    );
};
export default ExecuteButton;