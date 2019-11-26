import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <form>
                    <div>
                        <label>Correo electr&oacute;nico</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        )
    };
}

export default Login;
