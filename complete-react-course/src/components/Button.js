import React from 'react';

//Adding Event Hnadlers

function Button(props){
    return(
        <button onClick={buttonClickEventHanler} className="btn btn-primary">{props.children}</button>
    )
}
export default Button;

//Helper Functions
function buttonClickEventHanler(){
    console.log('Button clicked');
}