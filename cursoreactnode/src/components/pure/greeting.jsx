//TODO: CREANDO COMPONENTE CON EL COMANDO {RCC}
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
 class Greeting extends Component {
myAge=30;

  constructor(props) {
    super(props)
    this.state = {
      name: 'Juan',  
      age : this.myAge
    }
  }

  render() {
    return (
      <div>
        <h2>Creando mi pirmer componente renderizado!</h2>
        <h3>Datos de: {this.state.name}</h3>
        <h3>Nombre: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>

        <button onClick={this.cumpleAno}>Cumplir Años</button>
      </div>
    )
  }
//TODO: Creando funcion para aumentar la edad
  cumpleAno =() => {
    this.setState((prevState)=>(
      {
        age: prevState.age + 1
      }
      
      )
     
    );  console.log('Mi edad anterior es: ', this.myAge)
    
  
  }
}

//TODO: Definiendo el tipo de datos de las pros


export default Greeting;