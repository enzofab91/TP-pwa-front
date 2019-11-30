import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            destacados: []
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/productos/destacados', {
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
                destacados: result.data.docs
            })
        }, error => { console.log(error)})
    }

    render() {
        const destacados = this.state.destacados.map(d => <li>{d.denominacion}</li>)
      return (
        <div className="App">
            <h2>Productos destacados</h2>
            <ul>{destacados}</ul>
        </div>
    )};
}

export default Home;
