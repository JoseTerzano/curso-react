import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation] = useState({});

    useEffect(() => {
      setFormState( initialForm );
    }, [ initialForm ]);

    useEffect(() => {
      createValidators();
    }, [formState]);
    
    const isFormValid = useMemo(() => {

        for (const element of Object.keys( formValidation )) {
            if( formValidation[element] !== null ) return false;
        }
        return true;
    }, [formValidation] );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    };

    const createValidators = () => {

        const formCheckedValues = {};

        for (const element of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[element];

            formCheckedValues[`${ element }Valid`] = fn( formState[element] ) ? null : errorMessage;
        };
        setFormValidation(formCheckedValues);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}