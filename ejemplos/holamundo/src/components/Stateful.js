// Componete conocido como la estructura de clases
// Nos permite tener ciclo de vida y estado 
// Componente mas robusto que tiene react.

import React, { Component } from 'react'

class Stateful extends Component {
  //el componente tiene acceso a un contructor
  constructor(props) {
      //Inicializamos las props con super
    super(props);
    //asignamos un estado
    this.state = {
        hello = 'Hola mundo'
    }
  }
  // render nos permite retornar el HTML
  render () {
   return <h1>{this.state.hello}</h1>
  }
   
}

export default Stateful;