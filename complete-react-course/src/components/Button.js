import React from 'react';

//Adding Event Handlers


function Button(props){
    return(
        <button onClick={props.eventHandler} className="btn btn-primary">{props.children}</button>
    )
}
export default Button;

