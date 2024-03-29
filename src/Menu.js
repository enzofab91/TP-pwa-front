import React from 'react';
import {Route} from 'react-router';
import {Link, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import CatalogoProductos from './CatalogoProductos';
import DetalleProducto from './DetalleProducto';
import NuestraHistoria from './NuestraHistoria';
import QuienesSomos from './QuienesSomos';
import Login from './Login';
import Registro from './Registro';
import Perfil from './Perfil';
import Checkout from './Checkout';
import Order from './Order';
import RecuperarContrasenia from './RecuperarContrasenia';
import NuevaContrasenia from './NuevaContrasenia';

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLogged: false
        }
    };
    
    componentDidMount(){
        this.changeLoginState();
    };
    
    changeLoginState(){
        if (localStorage.getItem("token")){
            this.setState({
                isLogged: true
            })
        } else {
            this.setState({
                isLogged: false
            })
        }
    };
    
    logout(){
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    
    render() {
        let html_li, html_logout;

        //console.log("is logged = " + this.state.isLogged)
        if (this.state.isLogged) {
            html_li = <li className="nav-item" >
            <Link to={"/perfil"}  className="nav-link" >Perfil</Link>
            </li>

            html_logout = <li className="nav-item" >
            <a className="nav-link" onClick={this.logout.bind(this)}>Cerrar Sesión</a>
            </li>
        } else {
            html_li = <li className="nav-item" >
            <Link to={"/login"}  className="nav-link" >Iniciar Sesi&oacute;n</Link>
            </li>
        }
      return (
      
<BrowserRouter>  
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={"/"} className="navbar-brand" >PWA Express</Link>
  {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>*/}
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item" >
      <Link to={"/catalogoproductos"} className="nav-link" >Productos</Link>
      </li>
      <li className="nav-item" >
          <Link to={"/quienessomos"} className="nav-link" >Quienes somos</Link>
      </li>
      <li className="nav-item" >
          <Link to={"/nuestrahistoria"} className="nav-link" >Nuestra historia</Link>
      </li>
      {html_li}
      {html_logout}
    </ul>
  </div>
</nav>
</div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/catalogoproductos" exact component={CatalogoProductos}></Route>
        <Route path="/detalleproducto/:id" exact component={DetalleProducto}></Route>
        <Route path="/login"  exact component={()=><Login data={this.changeLoginState.bind(this)}/>}></Route>
        <Route path="/registro" exact component={Registro}></Route>
        <Route path="/nuestrahistoria" exact component={NuestraHistoria}></Route>
        <Route path="/quienessomos" exact component={QuienesSomos}></Route>
        <Route path="/perfil" exact component={Perfil}></Route>
        <Route path="/checkout/:id" exact component={Checkout}></Route>
        <Route path="/order/:id" exact component={Order}></Route>
        <Route path="/recuperar-contrasenia" exact component={RecuperarContrasenia}></Route>
        <Route path="/reset-password/:token" exact component={NuevaContrasenia}></Route>
    
    </BrowserRouter>
    )};
    
}

export default Menu;
