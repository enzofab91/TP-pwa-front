import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Router} from 'react-router';
import {Link, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import CatalogoProductos from './CatalogoProductos';
import DetalleProducto from './DetalleProducto';
import Login from './Login';
import Registro from './Registro';
import avatar_image from "./assets/images/avatar.png";

ReactDOM.render(<BrowserRouter>
    <div>
        <div>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/catalogoproductos'}>Productos</Link></li>
            <li><Link to={'/login'}>Iniciar Sesi&oacute;n</Link></li>
            <li><Link to={'/registro'}>Registro</Link></li>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={"/"} className="navbar-brand" >TITLE</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item" >
      <Link to={"/catalogoproductos"} className="nav-link" >Productos</Link>
      </li>
      <li className="nav-item d-block d-sm-none" >
          <Link to={"/login"} className="nav-link" >Iniciar Sesi&oacute;n</Link>
      </li>
    </ul>
  </div>
  <div className="collapse navbar-collapse"> 
    <ul className="navbar-nav ml-auto nav-flex-icons">
     <li className="nav-item avatar dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src={avatar_image} className="rounded-circle z-depth-0"
            alt="avatar image"></img>
        </a>
        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55">
              <Link to={"/login"} className="dropdown-item" >Iniciar Sesi&oacute;n</Link>
              <Link to={"/login"} className="dropdown-item" >Cerrar sesi&oacute;n</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/catalogoproductos" exact component={CatalogoProductos}></Route>
        <Route path="/detalleproducto" exact component={DetalleProducto}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/registro" exact component={Registro}></Route>
    </div>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
