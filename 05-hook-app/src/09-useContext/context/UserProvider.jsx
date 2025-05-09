import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
//     id: 123, 
//     name: 'Jose',
//     email: 'joseT@gmail.com',
// };


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    // < UserContext.Provider value={{ hola: 'Mundo', user: user}}>
    < UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
//El value es lo que cualquier hijo del User Provider va a poder obtener del userContext,