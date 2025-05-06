import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp.jsx';
import './index.css';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //  <FormWithCustomHook />
  //< MultipleCustomHooks />
  //<FocusScreen/>
  <Layout/>
  // </React.StrictMode>
)
