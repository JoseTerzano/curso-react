import { addDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const doc = await addDoc(collection(FirebaseDB, `${ uid }`, "journal/notes"), newNote);

        newNote.id = doc.id // Le creo la propiedad id a newNote y le pongo la misma que la que genero el doc

        //dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    // En el getState tenemos todo los datos del autenticado y todos las cosas que ponemos en el store
    // El doc es la referencua al documento donde estamos almacenando
    }
}

export const startLoadingNote = () => {
    return async(dispatch, getState) => {
        
        const { uid } = getState().auth;
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}