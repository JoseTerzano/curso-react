import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
    };

    useEffect( () => {
        getImages();
    }, [] );

  return (
    <>
        <h3>{category}</h3>   

        <ol>
          {images.map(({id, title}) => (
            <li key={id}>{title}</li>
          )

          )}

        </ol> 
    </>
  )
};
//NUNCa colocar la ejecucion de una funcion dentro de un functional component
//useEffect es un hook que dispara efectos secundarios(proceso que quiero ejecutar cuando algo cambie)
