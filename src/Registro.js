import React from 'react';

class Registro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            apellido: '',
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

    render() {
        return (
            <div className="App">
                <form>
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" name="apellido" value={this.state.apellido} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <div>
                        <label>Correo electr&oacute;nico</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <div>
                        <label>Repetir Contraseña</label>
                        <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange.bind(this)} ></input>
                    </div>
                    <button type="submit">Confirmar</button>
                </form>
            </div>
        )
    };
}

export default Registro;
