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
            console.log(result); 
            localStorage.setItem("token", result["data"].token)
        }, error => { console.log(error)})
    }

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
                    <input type="button" value="Log in" onClick={this.login.bind(this)}/>
                </form>
            </div>
        )
    };
}

export default Login;
