import React from 'react';

class QuienesSomos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titulo: "",
            descripcion: "",
            contacto: ""
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/estaticas/quienes', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(result => { 
            this.setState({
                titulo: result.data.titulo,
                descripcion: result.data.descripcion,
                contacto: result.data.contacto
            })
        }, error => { console.log(error)})
    }

    render() {
      return (
        <div className="App">
            <div classNamer="container">
                <div className="row">
                    <div class="col-12 text-center">
                        <div class="form-group"><h3>{this.state.titulo}</h3></div>
                        <div class="form-group"><p>{this.state.descripcion}</p></div>
                        <div class="form-group"><p>Contacto: {this.state.contacto}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )};
}

export default QuienesSomos;
