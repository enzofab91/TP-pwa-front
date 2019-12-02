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
            console.log(result);
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
            <h3>{this.state.titulo}</h3>
            <p>{this.state.descripcion}</p>
            <p>{this.state.contacto}</p>
        </div>
    )};
}

export default QuienesSomos;
