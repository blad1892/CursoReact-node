import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ComponentB from './components/ejercicio_seccion1_2_3/componente_B';


 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mostrando mi primera edicion <code>src/App.js</code> en react.js.
        </p>
        
          {/*COLOCANDO MI PRIMER COMPONETE*/}
          
          {/*Componentes de lista de tareas*/}
          <TaskListComponent />
          {/*Poblando el constructor*/}
          
          <ComponentB />

      </header>
    </div>
  );
}

export default App;
