import { useState } from "react";
import { useForm } from "../Hooks/useForm";




export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, OnResetForm} = useForm({
        username: '',
        email: '',
        password: '',
    });
    //const {username, email, password} = formState;
    

  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange} />

        <input type="email"
        className="form-control mt-2"
        placeholder="@email.com"
        name="email"
        value={email} 
        onChange={onInputChange}/>

        <input type="password"
        className="form-control mt-2"
        placeholder="constraseña"
        name="password"
        value={password}
        onChange={onInputChange} />

        <button className="btn btn-primary mt-2" onClick={ OnResetForm }>Borrar</button>

    </>
  )
}
