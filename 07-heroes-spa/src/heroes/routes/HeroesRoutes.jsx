import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, HeroesPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        < Navbar />
        <div className="container">
          <Routes>
            <Route path="marvel" element={ <MarvelPage /> }/>
            <Route path="dc" element={ <DCPage/> }/>

            <Route path="hero/:id" element={ <HeroesPage/> }/>
            <Route path="search" element={ <SearchPage/> }/>
            
            <Route path="/" element={ <Navigate to='/marvel'/> }/>
          </Routes>
        </div> 
    </>
  )
}
