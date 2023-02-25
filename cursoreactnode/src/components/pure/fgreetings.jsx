import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Fgreetings = (props) => {
   
    const [age, setage] = useState(30);

    const cumpleAno = () => {
        //acutalizar años
        setage(age + 1);
    }
  return (
    <div>
      <h1>
        
        Hello {props.name}  desde componentes funcional!

      </h1>
      <h2>Edad: {age}</h2>
      <button onClick={cumpleAno}>Cumplir Años Funcion</button>
    </div>
  );
};

Fgreetings.propTypes = {
  name: PropTypes.string
}

export default Fgreetings
