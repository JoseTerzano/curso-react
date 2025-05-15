import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";



export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const lastPath = localStorage.getItem('lastPath') || '/';

  return ( logged )
  ? <Navigate to={ lastPath }/>
  : children
}