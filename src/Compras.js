import React from 'react';

class Compras extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            compras: []
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/users/compras', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(result => { 
            console.log(result);
            /*this.setState({
                nombre: result.data.nombre,
                apellido: result.data.apellido,
                email: result.data.email
            })*/
        }, error => { console.log(error)})
    }

    render() {
        const compras = this.state.compras.map(d => <li>{d.denominacion}</li>)
      return (
        <div className="App">
            <h2>compras</h2>
            <ul>{compras}</ul>
        </div>
    )};
}

export default Compras;
