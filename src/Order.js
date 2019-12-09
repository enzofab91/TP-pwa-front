import React from 'react';
import queryString from 'query-string'

class Order extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            prod_id: ''
        }
    };

    componentDidMount() {
        //const values = queryString.parse(this.props.location.search)

        /*this.setState({
            prod_id: this.props.match.params.id,
            cantidad: values.cant
        });

        fetch('http://localhost:3000/productos/' + this.state.prod_id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result.data)
            this.setState({
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
        }, error => { console.log(error)})*/
    }

    render() {
      return (
        <div className="App">
            ORDEN!!!
        </div>
    )};
}

export default Order;
