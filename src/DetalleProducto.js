import React from 'react';
import {Link} from 'react-router-dom';

class Detalleproducto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prod_id: '',
            cat_id: '',
            destacado: false,
            descripcion: '',
            denominacion: '',
            imagenes: [],
            precio: 0,
            precio_oferta: 0,
            sku: '',
            stock: 0,
            cantidad: 0
        }
    };

    componentDidMount(){
        fetch('http://localhost:3000/productos/' + this.props.match.params.id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(result => {
            this.setState({
                prod_id: this.props.match.params.id,
                cat_id: result.data.categoria,
                destacado: result.data.destacado,
                descripcion: result.data.descripcion,
                denominacion: result.data.denominacion,
                imagenes: result.data.imagenes,
                precio: result.data.precio,
                precio_oferta: result.data.precioOferta,
                sku: result.data.sku,
                stock: result.data.stock
            })
        }, error => { console.log(error)})

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        let prod = this.props.prod
        let imagenes
        let comprar
        if (prod) {
            imagenes = prod.imagenes.map(img => <img src={img} />)
            comprar = <button>Comprar</button>
        } else prod = {}
        return (
            <div className="App" style={{background: "lightblue"}}>
                    <div>
                        <p>{prod.sku}</p>
                        <p>{prod.denominacion}</p>
                        <p>{prod.descripcion}</p>
                        <p>$ {prod.precio}</p>
                        <p>{prod.precioOferta}</p>
                        <p>{prod.stock}</p>
                        <p>{prod.categoria != null ? prod.categoria.nombre : ""}</p>
                        <p>{imagenes}</p>
                        <p>{prod.denominacion}</p>
                        <p>Cantidad: <input type="number" name="cantidad" value={this.state.cantidad} onChange={this.handleChange.bind(this)} className="small"></input></p>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={"/checkout/" + this.state.prod_id + "?cant=" + this.state.cantidad}>Comprar</Link></button>
                    </div>
                    {comprar}
            </div>
        )
    };
}

export default Detalleproducto;
