import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);
// esto esta haciendo que categories sea un arreglo con lo que le puse en el useState

    const onAddCategory = (newcategory) => {

      if(categories.includes(newcategory)) return;
      if(categories.includes(newcategory.toUpperCase())) return;

      setCategories([ newcategory ,...categories]);
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
//CUANDO QUERAMOS ALMACENAR INFORMACION Y ESA INFO CAMBIA EL HTML
//USUALMENTE SE USA UN HOOK DE REACT PARA MANTENER EL ESTADO
//El .map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
