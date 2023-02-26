import React from "react";
import PropTypes from 'prop-types';
import {ComponentA} from './componente_A.class';


const ComponentB =({contacto})=>{

    contacto = new ComponentA('Bladimir','Rojas','ejemplo@hotmail.com', true);
return(
<div>
    <h1>Contato:</h1>
    <h3>Nombre: {contacto.Nombre} </h3>
    <h3>Apellido: {contacto.Apellido} </h3>
    <h3>Email: {contacto.Email} </h3>
    <h3>Conectado: { contacto.Conectado ? 'En Linea':'No Disponible' } </h3>
</div>
);

}
ComponentB.prototype={
    contacto: PropTypes.instanceOf(ComponentA)
    }
export default ComponentB;

