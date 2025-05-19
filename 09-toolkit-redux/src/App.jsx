import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice';

function App() {
  
  const { contador } = useSelector( state => state.counter );
  console.log(contador)
  const dispatch = useDispatch();

  return (
    <>
      <h1>count is {contador}</h1>
      <div className="card">
        <button type='button' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type='button' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type='button' onClick={() => dispatch(incrementBy(2))}>
          Increment By 2
        </button>
      </div>
    </>
  )
}

export default App
