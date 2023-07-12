import './app.css';
import './components/Products';
import Products from './components/Products';

/**Using PROPS to display various product using the Products component*/
const product = [
    {
        pId: 1,
        pName: "Fresh Milk",
        pDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        isAvailable: true,
        image: "images/fresh-milk.png",
        price: 12
    },
    {
        pId: 2,
        pName: "Cottage Cheese",
        pDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nam at lectus urna duis convallis convallis. Enim lobortis scelerisque fermentum dui faucibus in ornare. ",
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10
    },
    {
        pId: 3,
        pName: "Brocoli",
        pDescription: "Purus non enim praesent elementum. Donec ac odio tempor orci dapibus ultrices. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Velit egestas dui id ornare arcu odio. Senectus et netus et malesuada fames ac turpis egestas. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. ",
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15
    },
    {
        pId: 4,
        pName: "Oranges",
        pDescription: "Mi ipsum faucibus vitae aliquet nec. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sed pulvinar proin gravida hendrerit. Porta nibh venenatis cras sed. Id interdum velit laoreet id donec ultrices tincidunt arcu. Morbi quis commodo odio aenean sed adipiscing diam.",
        isAvailable: true,
        image: "images/oranges.png",
        price: 20
    },
    {
        pId: 5, 
        pName: 'Olive oil', 
        pDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    }
];


function App(){
   
    return (
    <div className='row'>
        <div className='col-lg-8 mx-auto'>
            <ul className="list-group shadow">
                <Products
                    id={product[0].pId}
                    name={product[0].pName}
                    description={product[0].pDescription}
                    isAvailable={product[0].isAvailable}
                    imageUrl={product[0].image}
                    price={product[0].price}
                ></Products>
                <Products
                    id={product[1].pId}
                    name={product[1].pName}
                    description={product[1].pDescription}
                    isAvailable={product[1].isAvailable}
                    imageUrl={product[1].image}
                    price={product[1].price}
                ></Products>
                <Products
                    id={product[2].pId}
                    name={product[2].pName}
                    description={product[2].pDescription}
                    isAvailable={product[2].isAvailable}
                    imageUrl={product[2].image}
                    price={product[2].price}
                ></Products>
                <Products
                id={product[3].pId}
                    name={product[3].pName}
                    description={product[3].pDescription}
                    isAvailable={product[3].isAvailable}
                    imageUrl={product[3].image}
                    price={product[3].price}
                ></Products>
                <Products
                    id={product[4].pId}
                    name={product[4].pName}
                    description={product[4].pDescription}
                    isAvailable={product[4].isAvailable}
                    imageUrl={product[4].image}
                    price={product[4].price}
                ></Products>
            </ul>
        </div>
    </div>
    )
}
export default App;