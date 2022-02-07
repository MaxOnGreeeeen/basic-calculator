import {React, useState} from 'react';
import Button from '../../Components/Button/Button.jsx'
import classes from './Brackets.module.css'

const Brackets = (props) => {

     const [isMouseInside, setMouseEvent] = useState(false);

     const mouseEnter = () => {
     console.log("Mouse Enter")
        setMouseEvent(true)
      }
      const mouseLeave = () => {
        console.log("Mouse Leave")
        setMouseEvent(false)
     }
    return (
        <div className = {classes.button2}
        onMouseEnter = {mouseEnter}
        onMouseLeave = {mouseLeave}>
                {isMouseInside
                     ?<div className = {classes.blockOfInf}>
                       <Button onClick = {() => props.onClick('(')} isBracket = {true} >(</Button>
                       <Button onClick = {() => props.onClick(')')} isBracket = {true}>)</Button>
                     </div>
                     :props.children
                }
        </div>
    );
};

export default Brackets;