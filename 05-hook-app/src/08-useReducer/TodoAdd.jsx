import { useForm } from "../Hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

  const {description, onInputChange, OnResetForm} = useForm({
      description: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }
    onNewTodo(newTodo);
    OnResetForm();
  };
  return (

    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Que hay que hacer?" 
            className="form-control"
            name="description"
            value={description}
            onChange={ onInputChange }
            />
            <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
            >
            Agregar
            </button>
        </form>
    
  )
}
