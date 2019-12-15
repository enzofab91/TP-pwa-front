import React from 'react';

class NuestraHistoria extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titulo: "",
            descripcion: ""
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/estaticas/historia', {
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
            })
        }, error => { console.log(error)})
    }

    render() {
      return (
        <div className="App">
            <div classNamer="container">
                <div className="row">
                    <div class="col-12 text-center">
                        <h3>{this.state.titulo}</h3>
                        <p>{this.state.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    )};
}

export default NuestraHistoria;
