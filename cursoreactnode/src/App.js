import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Fgreetings from './components/pure/fgreetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mostrando mi primera edicion <code>src/App.js</code> en react.js.
        </p>
        
          {/*COLOCANDO MI PRIMER COMPONETE*/}
          <Greeting name="Bladimir"></Greeting>
          <Fgreetings name="Bladimir"></Fgreetings>

      </header>
    </div>
  );
}

export default App;
