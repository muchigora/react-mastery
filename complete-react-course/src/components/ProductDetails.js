import React from "react";
import Button from "./Button";

function ProductDetails(props){

    let badgeClass = 'badge-margin-left-240 badge '; 
        badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';

    let productCount = 0;
    function displayFormattedProductCount(){   {/**This function checks the quantity available and return either an integer of value of qty of 'string "zero" */}
        return productCount > 0 ? productCount : "zero";
    }

    //Helper functions
    let incrementProductCount = function(){
        productCount++;
        console.log(productCount);
    }

    let decrementProductCount = function(){
        productCount--;
        console.log(productCount);
    }

    return(
        <div className="d-flex align-items-center justify-content-start mt-1" >
            <h6 className="font-weight-bold my-2" style={{marginRight:20}}>{props.price}</h6>
            <Button eventHandler = {decrementProductCount}>-</Button> {/**Adding and Event handler to a Custom Element */}
            <span style={{padding:"0px 10px", fontSize: 10}}>{displayFormattedProductCount()}</span>  
            <Button eventHandler = {incrementProductCount} onClick={decrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
        </div>
    )
}
export default ProductDetails;

