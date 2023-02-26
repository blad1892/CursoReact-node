import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { TaskComponent } from '../pure/forms/task';

const TaskListComponent = () =>{

    var defaultTask = new Task('Primera task', "Esta es pirmera descripcion de task 1", false, LEVELS.NORMAL);
    return (
        <div>
          <h1>Tu tarea : </h1>
          <TaskComponent task={ defaultTask }></TaskComponent>

        </div>
    )
    
}
TaskListComponent.propTypes ={

}

export default TaskListComponent;
