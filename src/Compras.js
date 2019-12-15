import React from 'react';
import {Link} from 'react-router-dom';

class Compras extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            compras: [],
            page: 1,
            sort: "",
            selected : null
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/compras', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result.data)
            this.setState({
                compras: result.data
            })
        }, error => { console.log(error)})
    }

    render() {
        const compras = this.state.compras.map((p, i) => <tr>
            <td>{p._id}</td>
            <td>{p.fecha}</td>
            <td>{p.estadoPago}</td>
            <td>{(p.forma_pago === 'E' ? 'Efectivo' : 'Mercado Pago')}</td>
            <td>{p.cantidad}</td>
            <td>{p.aPagar}</td>
            <td>{p.producto.denominacion}</td>
            <td><button type="button" className="btn btn-sm btn-outline-secondary"><Link to={"/order/" + p._id}>Ver</Link></button></td>
        </tr>)
      return (
        <div className="App">
            <br></br>
            <h5>Sus compras:</h5>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col" >Forma de Pago</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Ver</th>
                </tr>
            </thead>
            <tbody>
                {compras}
            </tbody>
        </table>
        
        </div>
    )};
}

export default Compras;
