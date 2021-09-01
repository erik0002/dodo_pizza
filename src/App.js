import React  from "react";
import './App.css';
import axios from "axios";
//import logoSvg from './asserts/img/pizza-logo.svg';
import {Header} from "./components";
import {Main, Basket} from "./pages";
import {Route} from "react-router-dom";

function App() {

    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })

    //fetch
    //     fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
    //         setPizzas(json.pizzas);
    //     });

     }, [])

  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
            <Route path="/" render={() => <Main items={pizzas}/>} exact/>
            <Route path="/basket" component={Basket} exact/>
        </div>
      </div>
  );
}

export default App;
