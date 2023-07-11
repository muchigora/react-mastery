
let productCount = 0;

function displayFormattedProductCount(){
    return productCount > 0 ? productCount : <h5>zero</h5>;
}

function Products(){
    return(
        <ul className="list-group shadow">
            <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
                        <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea et nobis reprehenderit eveniet neque quisquam aliquam facilis beatae, error quae atque veniam deserunt asperiores. Dolor maiores rem sed. Iste, voluptatem.</p>
                        <div className="d-flex align-items-center justify-content-start mt-1">
                            <h6 className="font-weight-bold my-2">$120.00</h6>
                            <button className="btn btn-primary">-</button>
                            <span>{displayFormattedProductCount()}</span>  {/**JS expressions can be imedded inside curly braces in a SJX expression */}
                            <button className="btn btn-primary">+</button>
                        </div>
                    </div>
                    <img src="https://picsum.photos/200" width="200" alt="product image" className="ml-lg-5 order-1 order-lg-2"></img>
                </div>
            </li>            
        </ul>
    )
}
export default Products;