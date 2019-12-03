import React from 'react';
import Compras from './Compras';

class Perfil extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre: "",
            apellido: "",
            email: ""
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/users/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(result => { 
            console.log(result);
            this.setState({
                nombre: result.data.nombre,
                apellido: result.data.apellido,
                email: result.data.email
            })
        }, error => { console.log(error)})
    }

    render() {
      return (
        <div className="App">
            <div>
                <label>Nombre: </label> {this.state.nombre}
            </div>
            <div>
                <label>Apellido: </label> {this.state.apellido}
            </div>
            <div>
                <label>Correo electrónico: </label> {this.state.email}
            </div>
            <Compras />
        </div>
    )};
}

export default Perfil;
