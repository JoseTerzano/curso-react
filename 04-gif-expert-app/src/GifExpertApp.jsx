import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);
// esto esta haciendo que categories sea un arreglo con lo que le puse en el useState

    const onAddCategory = (newcategory) => {

      if(categories.includes(newcategory)) return;
      if(categories.includes(newcategory.toUpperCase())) return;

      setCategories([...categories, newcategory]);
      //Es un nuevo arreglo donde estan las categorias y se agrega lo que agrego
    };
  return (
    <>

        <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory = {onAddCategory}
      />
        { categories.map( category => (
            <GifGrid key={category} category={category}/>
          ))
        }

    </>

  )
};
//hay que mantener un listado de las categorias que queremos buscar
//y almacenar el listado que debe persistir conforme lo que trabajamos en la aplicacion
//CUANDO QUERAMOS ALMACENAR INFORMACION Y ESA INFO CAMBIA EL HTML
//USUALMENTE SE USA UN HOOK DE REACT PARA MANTENER EL ESTADO
//El .map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
