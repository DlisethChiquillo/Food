import {Route} from "react-router-dom";
import './App.css';
import {Home, Landing, Detail, Form} from "./views"


function App() {
  return (
    <div className="App">

      <Route path="/home" render={() => <Home/>} />
      <Route exact path="/"render={()=><Landing/>} />
      <Route exact path="/detail"render={()=><Detail/>} />
      <Route exact path="/create"render={()=><Form/>} />

    
      
      {/* <h1>Henry Food</h1> */}
    </div>
  );
}

export default App;
