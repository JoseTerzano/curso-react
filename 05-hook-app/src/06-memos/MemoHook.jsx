import { useMemo, useState } from "react"
import { useCounter } from "../Hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
  for(let i=0;i<iterationNumber; i++){
    console.log('ahi vamos')
  }

  return `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {
    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button
        className="btn btn-primary mt-2"
        onClick={ () => increment() }
        >
            +1
        </button>    
        <button className="btn btn-outline-primary mt-2"
        onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
