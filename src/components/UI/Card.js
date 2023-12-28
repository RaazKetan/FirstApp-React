// import React from 'react';
import './Card.css';
function Card(props){
    const classes = 'card ' + props.className;
 return <div className={classes}>{props.children}</div>;
    //children prop will always be the content between the opening and closing tag of our custom component
}
export default Card;