import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numero
    }
    
    maisUm = () => {
        this.setState({numero: this.state.numero + 1});
    }


    menosUm = () => {
        this.setState({numero: this.state.numero - 1});
    }

    alterarNumero = valorParaSoma => {
        this.setState({numero: this.state.numero + valorParaSoma});
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementa</button>
                <button onClick={this.menosUm}>Decrementa</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementa 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementa 10</button>
            </div>
        );
    }
}


// solução 01 - Bind
// constructor(props){
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }


// solução 02 - Função arrow (onClick)
/* <button onClick={() => this.maisUm()}>Incrementa</button> */

//solução 03 - Função arrow
// maisUm = () => {
//     this.props.numero++;
// }
