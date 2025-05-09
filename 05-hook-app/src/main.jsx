import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp.jsx';
import './index.css';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
//import { TodoApp } from './08-useReducer/TodoApp';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //  <FormWithCustomHook />
  //< MultipleCustomHooks />
  //<FocusScreen/>
  //<Layout/>
  //<Memorize/>
  // <MemoHook/>
  // <CallbackHook/>
  // <Padre/>
  //<TodoApp/>
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>

  // </React.StrictMode>
)
