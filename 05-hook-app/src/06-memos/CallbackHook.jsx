import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"




export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementPadre = useCallback(
      (valor) => {
        setCounter((value) => value + valor);
      },
      [],
    );
    
    // useEffect(() => {
    // incrementPadre()
    // }, [incrementPadre])
    

//     const incrementPadre = () => {
//         setCounter(counter+1);
//     }
    return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
    
        <ShowIncrement increment={incrementPadre}/>
    </>

  )
}
