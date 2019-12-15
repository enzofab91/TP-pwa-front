import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            destacados: []
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/productos/destacados', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(result => { 
            this.setState({
                destacados: result.data.docs
            })
        }, error => { console.log(error)})
    }

    render() {
        const destacados = this.state.destacados;
        let oferta, precio; 
        return (
          <div className="App">
              <div className="container">
              <h3 >Productos destacados</h3>
              <div className="row">
                {destacados.map(d => {
                    if (d.precioOferta !== null && d.precioOferta > 0){
                        precio = <small className="text-muted tachado">$ {d.precio}</small>
                        oferta = <small className="text-muted">En oferta $ {d.precioOferta}</small>
                    } else {
                        oferta = ""
                        precio = <small className="text-muted">$ {d.precio}</small>
                    }
                return (
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <p className="card-text">{d.denominacion}</p>
                                <p className="card-text">{d.descripcion}</p>
                                <p className="card-text">SKU {d.sku}</p>
                                <img href={d.imagenes[1]} alt=""></img>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={"/detalleproducto/" + d.id}>Ver</Link></button>
                                    </div>
                                    {precio}
                                    {oferta}
                                </div>
                                </div>
                        </div>
                    </div>)
            })}
            </div>
          </div></div>
    )};
}

export default Home;
