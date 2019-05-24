import React, { Component} from 'react';
import '../css/App.css';
import '../css/new-age.css';
import Header from './Header';
import Formulario from './Formulario';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';




import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

const Login = () => (
  <div>Login</div>
);


class App extends Component {

  state = {
    presupuesto : '',
    restante : '',
    gastos: {}
  }

  //AGREGAR UN NUEVO GASTO AL STATE
  agregarGasto = gasto =>{
    //TOMAR UNA COPIA DEL STATE ACTUAL
    const gastos = {...this.state.gastos};
    
    //AGRGAR AL GASTO AL OBJETO DEL STATE
    gastos[`gasto ${Date.now()}`] = gasto;
    console.log(gastos);
    
    //PONERLO EN STATE
    this.setState({
      gastos : gastos
    })


  }
  render(){

  return (
    <div className = "App container">

<Router>


      <Home/>
      <ul>
      <li><Link to="/login">Login</Link></li>
      </ul>

      <div className = "contenido-principal contenido">
        <div className = "row">

          <div className = "one-half column">
            <Formulario agregarGasto = {this.agregarGasto}
            />
          </div>

          <div className = "one-half column">
            
          </div>

        </div>
      </div>

      <Switch>
        
          <Route path="/login" exact component={Login} />
        </Switch>

      </Router>
    </div>
  );
}
}
export default App;
