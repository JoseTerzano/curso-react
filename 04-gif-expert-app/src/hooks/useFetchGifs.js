import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
   const [images, setImages] = useState([])
   const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    useEffect( () => {
        getImages();
    }, [] );
//useEfect aqui realiza la funcion del primer argumento y como segundo colocamos las []
//que indica que el hook se lanza la primera vez que se construye el componente

  return {
    images: images,
    isLoading: isLoading
  };
};
//un Hook es una funcion que retorna algo
