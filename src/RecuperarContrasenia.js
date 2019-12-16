import React from 'react';
import {Link} from 'react-router-dom';

class RecuperarContrasenia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    recuperarContrasenia() {
        fetch('http://localhost:3000/autentication/req-reset-password', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(result => { 
                window.location.href = '/';
        }, error => { console.log("error!! = " + error)})
    }

    render() {
        return (
            <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="billing-title text-center">Recuperar contraseña</h3>
                        <p>Ingrese su correo electrónico y recibirá instrucciones para recuperar su contraseña</p>
                        <input type="text" placeholder="Correo electrónico" type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} className="common-input mt-20"></input>
                            <br></br><br></br>
                        <button onClick={this.recuperarContrasenia.bind(this)}><span>Confirmar</span></button>
                    </div>
                </div>
            </div>
            </div>
        )
    };
}

export default RecuperarContrasenia;
