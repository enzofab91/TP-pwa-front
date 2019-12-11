import React from 'react';
import queryString from 'query-string'

class Order extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fecha: new Date(),
            aPagar: 0,
            cantidad: 0,
            estadoPago: '',
            forma_pago: '',
            producto: {
                prod_id: '',
                categoria: '',
                destacado: false,
                descripcion: '',
                denominacion: '',
                imagenes: [],
                precio: 0,
                precio_oferta: 0,
                sku: '',
                stock: 0
            }
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/compras/order/' + this.props.match.params.id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(result => {
            this.setState({
                fecha: result.data.fecha,
                aPagar: result.data.aPagar,
                cantidad: result.data.cantidad,
                estadoPago: result.data.estadoPago,
                forma_pago: result.data.forma_pago,
                producto: {
                    denominacion: result.data.producto.denominacion,
                    descripcion: result.data.producto.descripcion,
                    denominacion: result.data.producto.denominacion,
                    imagenes: result.data.producto.imagenes,
                    precio: result.data.producto.precio,
                    precio_oferta: result.data.producto.precioOferta,
                    sku: result.data.producto.sku,
                    stock: result.data.producto.stock,
                    categoria: result.data.producto.categoria
                }
            })
            console.log("prod")
        }, error => { console.log(error)})
    }

    render() {
        let imagenes;
        imagenes = this.state.producto.imagenes.map(img => <img src={img} />)
      return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <h3>¡Felicitaciones! Su compra se ha realizado correctamente</h3>
                    <div className="col-md-6">
                        <h5>Producto</h5>
                        <p>{this.state.producto.sku}</p>
                        <p>{this.state.producto.denominacion}</p>
                        <p>{this.state.producto.descripcion}</p>
                        <p>$ {this.state.producto.precio}</p>
                        <p>{this.state.producto.precioOferta}</p>
                        <p>{this.state.producto.stock}</p>
                        <p>{this.state.producto.categoria != null ? this.state.producto.categoria.nombre : ""}</p>
                        <p>{imagenes}</p>
                        <p>{this.state.producto.denominacion}</p>
                    </div>

                    <div className="col-md-6">
                    <p>Fecha: {this.state.fecha.toString}</p>
                    <p>Cantidad: {this.state.cantidad}</p>
                    <p>Total: ${this.state.aPagar}</p>
                    <p>Estado: {this.state.estadoPago}</p>
                    <p>Forma de pago: {(this.state.forma_pago === 'E' ? 'Efectivo' : 'Mercado Pago')}</p>
                    </div>
                </div>
            </div>
        </div>
    )};
}

export default Order;
