import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};
//esto es para que cuando recarguemos se queden los datos
export const useTodo = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      dispatch(action);
    };

    const handleDeleteTodo = (id) =>{
      dispatch({
        type: '[TODO] Remove Todo',
        payload: id,
      })
    };
    
    const handleToggleTodo = (id) => {
      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id,
      })
    };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done).length,
  }
}
