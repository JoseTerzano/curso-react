import { Navigate, Route, Routes, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      < NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="login" element={<LoginPage/>}/>

        {/* <Route path="/*" element={ <LoginPage/> }/> */}
        <Route path="/*" element={ <Navigate to="/about"/> } />
      </Routes>
    
    </UserProvider>


  )
}
//<Route path="/*" element={ <LoginPage/> }/> el /* es para cuando no existe la ruta nos mando al login(Aca lo que hace es
// que nos muestra esa pagina pero el path es el que ingrese que no existe) En cambio de la otra manera nos manda a la ruta 
