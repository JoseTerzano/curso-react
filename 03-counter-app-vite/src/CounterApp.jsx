import PropTypes from 'prop-types';
import { useState } from 'react'

//el hook es una funcion


export const CounterApp = ({value}) => {

  const [  counter, setCounter  ] = useState( value );

  const handleAdd = () => {
    //console.log(event);
    setCounter(counter + 1);
    //setCounter((c) => c + 1)
  };
  const handleRest = () => setCounter(counter - 1);
    //setCounter((c) => c + 1)
  const handleReset = () => setCounter(value);
    //setCounter((c) => c + 1)
  return (
    <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleRest }> -1 </button>
        <button aria-label='btn-reset' onClick={handleReset}> Reset </button>

    
    </>

  )
};
/*export const CounterApp = ({value}) => {
  function handleAdd(event, valor) {
    console.log(valor)
  };
return (
  <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={ (event) => handleAdd(event, value='Hola') }>
        +1
      </button>
  
  </>

)
};*/
//handleAdd no ponemos nada de arguemento (event) porque solo lo recibe y manda
CounterApp.propTypes = {
    value: PropTypes.number,

};
