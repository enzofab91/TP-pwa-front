import React from 'react';
import {Link} from 'react-router-dom';

class CatalogoProductos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productos: [],
            page: 1,
            sort: "",
            selected : null
        }
    };

    componentDidMount() {
        fetch(`http://localhost:3000/productos?sort=${this.state.sort}&page=${this.state.page}`, {
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
                productos: result.data.docs
            })
        }, error => { console.log(error)})
    }

    render() {
        const productos = this.state.productos.map((p, i) => <tr>
            <td onClick={(e) => this.verDetalle(i)}>{p.sku}</td>
            <td>{p.denominacion}</td>
            <td>{p.descripcion}</td>
            <td>{p.precio}</td>
            <td>{p.precioOferta}</td>
            <td>{p.stock}</td>
            <td>{p.categoria != null ? p.categoria.nombre : ""}</td>
            <td><img src="p.imagenes[0]" alt=""/></td>
            <td>{p.denominacion}</td>
            <td><button type="button" className="btn btn-sm btn-outline-secondary"><Link to={"/detalleproducto/" + p.id}>Ver</Link></button></td>

        </tr>)
      return (
        <div className="App">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" >SKU</th>
                    <th scope="col" >Denominaci&oacute;n</th>
                    <th scope="col">Descripci&oacute;n</th>
                    <th scope="col" >Precio</th>
                    <th scope="col">Oferta</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Im&aacute;genes</th>
                    <th scope="col">Destacado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {productos}
            </tbody>
        </table>
        
        </div>
    )};

    verDetalle(i) {
        this.setState({
            selected : this.state.productos[i]
        })
    }
}

export default CatalogoProductos;
