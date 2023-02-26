import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


export const TaskComponent=({ task })=>{
    return (
       <div>
        <h2>Nombre: { task.name }</h2>
        <h3>Descripcion: {task.descripcion }</h3>
        <h4>Nivel: { task.levels } </h4>
        <h4>Esta tarea esta: { task.complet ? 'Completada' : 'Pendiente' }</h4>
       </div>    
    )
}

TaskComponent.propTypes={
task: PropTypes.instanceOf(Task)
 };
