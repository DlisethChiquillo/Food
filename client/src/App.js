import {Route,} from "react-router-dom";
import './App.css';
import {Home, Landing, Detail, Form} from "./views"
import NavBar from "./components/navBar/NavBar";
import { useLocation } from "react-router-dom";


function App() {
const location = useLocation();

  return (
    <div className="App">
    
    {location.pathname !== "/" && <NavBar/>}


      <Route exact path="/" render={()=><Landing/>} />
      <Route path="/home" render={() => <Home/>} />
      <Route exact path="/detail" render={()=><Detail/>} />
      <Route exact path="/create" render={()=><Form/>} />


    
      
      {/* <h1>Henry Food</h1> */}
    </div>
  );
}

export default App;
