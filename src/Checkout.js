import React from 'react';
import queryString from 'query-string'

class Checkout extends React.Component {
    constructor(props){
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
            cantidad: 0,
            forma_pago: 'E'
        }
    };

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)

        fetch('http://localhost:3000/productos/' + this.props.match.params.id, {
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
                prod_id: this.props.match.params.id,
                cantidad: values.cant,
                cat_id: result.data.categoria,
                destacado: result.data.destacado,
                descripcion: result.data.descripcion,
                denominacion: result.data.denominacion,
                imagenes: result.data.imagenes,
                precio: result.data.precio,
                precio_oferta: result.data.precioOferta,
                sku: result.data.sku,
                stock: result.data.stock,
                full_prod: result.data
            })
        }, error => { console.log(error)})
    }

    comprar() {
        var compra = {
            fecha: new Date(),
            cantidad: this.state.cantidad,
            forma_pago: this.state.forma_pago,
            producto: this.state.prod_id
        }
        fetch('http://localhost:3000/compras/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            },
            body: JSON.stringify(compra)
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            this.props.history.push('/order/' + result.data._id);
        }, error => { console.log("ERROR!!!");console.log(error)})
    }

    payMethod(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        let precio, oferta;
        
        if (this.state.precio_oferta > 0){
            precio = <small className="text-muted tachado">$ {this.state.precio}</small>
            oferta = <small className="text-muted">En oferta $ {this.state.precio_oferta}</small>
        } else {
            oferta = ""
            precio = <small className="text-muted">$ {this.state.precio}</small>
        }

      return (
        <div className="App">
            <h3>Usted está por comprar el siguiente producto:</h3>
            <br/>
            <h3>{this.state.denominacion}</h3>
            <p>{this.state.descripcion}</p>
            <h2> {precio}</h2>
            <h2> {oferta}</h2>
            Cantidad <h5>{this.state.cantidad}</h5>
            <br/><br/>
            <p>Por favor, seleccione el método de pago</p>

            <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="pay_efectivo" name="forma_pago" value="E" checked={this.state.pay_method === "E"}  onChange={this.payMethod.bind(this)} checked></input>
                <label className="custom-control-label" for="pay_efectivo">Efectivo</label>
            </div>

            <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="pay_mercadopago" name="forma_pago" value="MP" checked={this.state.pay_method === "MP"}  onChange={this.payMethod.bind(this)}></input>
                <label className="custom-control-label" for="pay_mercadopago">Mercado Pago</label>
            </div>

            <input type="button" value="Comprar" onClick={this.comprar.bind(this)}/>
        </div>
    )};
}

export default Checkout;
