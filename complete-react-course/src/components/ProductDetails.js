import React, {useState}  from "react";
import Button from "./Button";


function ProductDetails(props){

    let badgeClass = 'badge-margin-left-240 badge '; 
        badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';

    let [productCount, updateCount] = useState(0) 
    
    function displayFormattedProductCount(){   
        return productCount > 0 ? productCount : "zero";
    }

    //Helper functions
    let incrementProductCount = function(){
        updateCount(++productCount);
    }

    let decrementProductCount = function(){
        updateCount(--productCount);
    }

    return(
        <div className="d-flex align-items-center justify-content-start mt-1" >
            <h6 className="font-weight-bold my-2" style={{marginRight:20}}>{props.price}</h6>
            <Button eventHandler = {decrementProductCount}>-</Button> 
            <span style={{padding:"0px 10px", fontSize: 10}}>{displayFormattedProductCount()}</span>  
            <Button eventHandler = {incrementProductCount} onClick={decrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
        </div>
    )
}
export default ProductDetails;

