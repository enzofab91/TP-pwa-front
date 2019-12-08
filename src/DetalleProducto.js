import React from 'react';

class Detalleproducto extends React.Component {
    constructor(props) {
        super(props)
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
                        <p>{prod.precio}</p>
                        <p>{prod.precioOferta}</p>
                        <p>{prod.stock}</p>
                        <p>{prod.categoria != null ? prod.categoria.nombre : ""}</p>
                        <p>{imagenes}</p>
                        <p>{prod.denominacion}</p>
                    </div>
                    {comprar}
            </div>
        )
    };
}

export default Detalleproducto;
