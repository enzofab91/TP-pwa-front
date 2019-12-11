import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        console.log(this.props.data);
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    login() {
        fetch('http://localhost:3000/autentication/loginUsuario', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            ,
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(result => { 
            localStorage.setItem("token", result["data"].token)
            this.props.data();
            var urlToRedirect = localStorage.getItem("orderUrl");
            
            /*if (urlToRedirect === null){
                this.props.history.push('/');
            } else {
                localStorage.removeItem("orderUrl");
                this.props.history.push(urlToRedirect);
            }*/
        }, error => { console.log(error)})
    }

    render() {
        return (
            <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login-form">
                            <h3 className="billing-title text-center">Login</h3>
                            <p className="text-center mt-80 mb-40">¡Bienvenido! Inicie sesión en su cuenta</p>
                                <input type="text" placeholder="Correo electrónico" type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} className="common-input mt-20"></input>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} className="common-input mt-20"></input>
                                <button className="view-btn color-2 mt-20 w-100" onClick={this.login.bind(this)}><span>Ingresar</span></button>
                                <div className="mt-20 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" className="pixel-checkbox" id="login-1"></input><label>Recuérdame</label></div>
                                    <a>¿Olvidaste tu contraseña?</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="register-form">
                        <h3 className="billing-title text-center">Registro</h3>
                        <p className="text-center mt-40 mb-30">Si aún no está registrado, ingrese sus datos en el formulario que se le presentará a continuación </p>
                        <Link to={"/registro"}><button className="view-btn color-2 mt-20 w-100"><span>Registrarse</span></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    };
}

export default Login;
