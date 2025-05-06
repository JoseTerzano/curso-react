import { useState } from "react"



export const CounterApp = () => {

    const [state, setCounter] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 30,
    });
    const {contador1, contador2, contador3} = state;
    

  return (
    <>
        <h1>Counter: {contador1}</h1>
        <h1>Counter: {contador2}</h1>
        <h1>Counter: {contador3}</h1>

        
        <hr />

        <button className= 'btn' onClick={ () => setCounter({
            ...state,
            contador1: contador1 + 1,
            //contador2,
            //contador3
        })}>+1</button>
    
    </>
  )
}
//Cuando tengamos un objeto en un useState y solo queramos cambiar un valor
//debemos poner informacion en todos los atributos que tenga
