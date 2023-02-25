//TODO: CREANDO COMPONENTE CON EL COMANDO {RCC}
import React, { Component } from 'react'

export default class greeting extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Juan',  
      age: 30
    }
  }

  render() {
    return (
      <div>
        <h2>Creando mi pirmer componente renderizado!</h2>
        <h3>Datos de: {this.state.name}</h3>
        <h3>Nombre: {this.state.name}</h3>
        <h3>Age: {this.age}</h3>
      </div>
    )
  }
}
