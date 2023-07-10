import './app.css';


function App(){
    let mgs = "AWESOME";   //JS variable
    return (
    <div>
        <h1 className="myHeader">This is an MY FIRST component</h1>

        <p className="myParagraph">this is my first {mgs} paragraph</p>  {/* JS variable in JSX*/}

        <input type="text"></input>

    </div>
    )
}
export default App;