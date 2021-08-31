import './App.css';
//import logoSvg from './asserts/img/pizza-logo.svg';
import {Header} from "./components";
import {Main, Basket} from "./pages";
import {Route} from "react-router-dom";

function App() {


  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
            <Route path="/" component={Main} exact/>
            <Route path="/basket" component={Basket} exact/>
        </div>
      </div>
  );
}

export default App;
