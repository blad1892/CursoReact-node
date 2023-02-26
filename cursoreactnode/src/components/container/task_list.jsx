import React from 'rect';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import {TaskComponet} from './pure/task';

export const TaskListComponent =()=>{

    var defaultTask =new Task('Primera task', "Esta es pirmera descripcion de task 1", false, LEVELS.NORMAL);
    return (
        <div>
          <h1>Tu tarea : </h1>
          <TaskComponet task={defaultTask}></TaskComponet>

        </div>
    )
    
}


TaskListComponent.propTypes = {

}