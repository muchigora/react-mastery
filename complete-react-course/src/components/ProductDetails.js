import Button from "./Button";

let productCount = 0;
let isAvailable = 'Available'; {/**If availble text background will be green otherwise it will be red */}

function displayFormattedProductCount(){
    return productCount > 0 ? productCount : <h5>zero</h5>;
}

function ProductDetails(props){
    
    let badgeClass = 'badge-margin-left-240 badge '; {/**used to determine whether product is availble or not, and assign a class based on availability.  */}
        badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';

    return(
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{marginRight:20}}>{props.price}</h6>
            <Button>-</Button> {/**This button element is not a JSX element but the Button Component */}
            <span style={{padding:"0px 10px", fontSize: 10}}>{displayFormattedProductCount()}</span>  {/**JS expressions can be imedded inside curly braces in a SJX expression */}
            <Button>+</Button>
            <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
        </div>
    )
}
export default ProductDetails;