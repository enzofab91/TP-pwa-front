import React from 'react';
import {Link} from 'react-router-dom';

class Detalleproducto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prod_id: '',
            cat_id: '',
            categoria: '',
            destacado: false,
            descripcion: '',
            denominacion: '',
            imagenes: [],
            precio: 0,
            precio_oferta: 0,
            sku: '',
            stock: 0,
            cantidad: 0,
            canBuy: false
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
                stock: result.data.stock,
                categoria: result.data.categoria
            })
        }, error => { console.log(error)})

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    handleBuy(e) {
        if (!this.state.cantidad > 0)
            e.preventDefault();
    };

    render() {
        let prod = this.props.prod;
        let imagenes, buttonComprar;

        //let comprar
        if (prod) {
            imagenes = this.prod.imagenes.map(img => <img src={img} alt=""/>)
        } else prod = {}

        if (localStorage.getItem("token") === null){
            localStorage.setItem("orderUrl", "/checkout/" + this.state.prod_id + "?cant=" + this.state.cantidad)
            buttonComprar = <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={"/login"} onClick={this.handleBuy.bind(this)}>Comprar</Link></button>
        } else {
            buttonComprar = <button type="button" className="btn btn-sm btn-outline-secondary"><Link to={"/checkout/" + this.state.prod_id + "?cant=" + this.state.cantidad} onClick={this.handleBuy.bind(this)}>Comprar</Link></button>
        }
        return (
            <div className="App">
                    <div>
                        <p>{this.state.sku}</p>
                        <p>{this.state.denominacion}</p>
                        <p>{this.state.descripcion}</p>
                        <p>$ {this.state.precio}</p>
                        <p>{this.state.precioOferta}</p>
                        <p>{this.state.stock}</p>
                        <p>{this.state.categoria != null ? this.state.categoria.nombre : ""}</p>
                        <p>{imagenes}</p>
                        <p>{this.state.denominacion}</p>
                        <p>Cantidad: <input type="number" name="cantidad" value={this.state.cantidad} onChange={this.handleChange.bind(this)} className="small"></input></p>
                        {buttonComprar}
                    </div>
                    {/*comprar*/}
            </div>
        )
    };
}

export default Detalleproducto;
