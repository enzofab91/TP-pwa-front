import React from 'react';
import queryString from 'query-string'

class NuevaContrasenia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            password2: ''
        }
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        console.log("did mount!")
        fetch('http://localhost:3000/autentication/valid-password-token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resetToken: this.props.match.params.token
            })
        }).then(res => res.json())
        .then(result => { 
                //nada
        }, error => { alert("El token no coincide!!"); console.log("error!! = " + error)})
    };

    nuevaContrasenia() {
        console.log(this.props.match.params.token)
        if (this.state.password === this.state.password2){
            fetch('http://localhost:3000/autentication/new-password', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    resetToken: this.props.match.params.token,
                    newPassword: this.state.password
                })
            }).then(res => res.json())
            .then(result => { 
                    window.location.href = '/';
            }, error => { console.log("error!! = " + error)})
        } else
            alert("Las contraseñas no coinciden")
    }

    render() {
        return (
            <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="billing-title text-center">Nueva contraseña</h3>
                        <p>Ingrese la nueva contraseña.</p>
                        <div>
                            <label>Contraseña</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} ></input>
                        </div>
                        <div>
                            <label>Repetir Contraseña</label>
                            <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange.bind(this)} ></input>
                        </div>
                        <button onClick={this.nuevaContrasenia.bind(this)}><span>Confirmar</span></button>
                    </div>
                </div>
            </div>
            </div>
        )
    };
}

export default NuevaContrasenia;
