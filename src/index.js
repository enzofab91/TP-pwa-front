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

ReactDOM.render(<BrowserRouter>
    <div>
        <div>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/catalogoproductos'}>Productos</Link></li>
            <li><Link to={'/login'}>Iniciar Sesi&oacute;n</Link></li>
            <li><Link to={'/registro'}>Registro</Link></li>
        </div>
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
