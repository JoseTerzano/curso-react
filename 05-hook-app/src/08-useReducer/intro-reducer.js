

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];
//Tenemos un estado inicial que mandamos al reducer

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo'){
        return [...state, action.payload];
    };

    return state;
}
//El reducer recibe el estado y una accion que sirve para regresar un nuevo estado

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar piedra del poder',
    done: false,
};


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};

todos = todoReducer( todos, addTodoAction);
