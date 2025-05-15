import { useContext, useEffect } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";



export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;

    useEffect(() => {
      if(logged){
        localStorage.setItem('lastPath', lastPath);
      }
    
    }, [logged, lastPath]);
    
  return ( logged )
  ? children
  : <Navigate to='/login' />
}
// el useLocation almacena: key, path, search y state