import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputvalue, setInputvalue ] = useState('');
    const onInputChaged = ({target}) => {
        setInputvalue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputvalue.trim().length <= 1) return;
        //setCategories(categories => [inputvalue, ...categories]);
        onNewCategory(inputvalue.trim());
        setInputvalue('');
    };


    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="buscar gifs"
                value={inputvalue}
                onChange={ onInputChaged }/>
        </form> 
    );
};
// por defecto el form hace refresh CUIDADO, vent.preventDefault();
