import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  

  return (
    <>
        <h3>{category}</h3>   
        {
          isLoading && <h2>Cargando...</h2>
        }
        <div className = "card-grid">
          {images.map((image) => (
           <GifItem 
           key={image.id} 
           //title = {image.title}
           //url = {image.url}
           { ...image } 
           //Le esparce al componente
           //todas las propiedades que vengan en image 
           />
          )

          )}

        </div> 
    </>
  )
};
//NUNCa colocar la ejecucion de una funcion dentro de un functional component
//useEffect es un hook que dispara efectos secundarios(proceso que quiero ejecutar cuando algo cambie)
