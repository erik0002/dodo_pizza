import React  from "react";
import './App.css';
import axios from "axios";
//import logoSvg from './asserts/img/pizza-logo.svg';
import {Header} from "./components";
import {Main, Basket} from "./pages";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
// import {connect} from 'react-redux';
import {setPizzas} from "./redux/actions/pizzas";


function App(){

    const dispatch = useDispatch();


    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas?_order=asc&_sort=price').then(({ data }) => {
            dispatch(setPizzas(data));
        })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Main} exact/>
                <Route path="/basket" component={Basket} exact/>
            </div>
        </div>
    )
}

export default App;


// function App() {
//
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//
//     //fetch
//     //     fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
//     //         setPizzas(json.pizzas);
//     //     });
//
//      }, [])
//
//   return ;
// }

// class App extends React.Component{
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             this.props.setPizzas(data.pizzas);
//         })
//     }
//
//     render () {
//         return (
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                     <Route path="/" render={() => <Main items={this.props.items}/>} exact/>
//                     <Route path="/basket" component={Basket} exact/>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         //setPizzas: (items) => dispatch(setPizzasAction(items)),
//     }
// }
// один из вариантов записи mapDispatchToProps

// const mapDispatchToProps = {
//     setPizzas
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
