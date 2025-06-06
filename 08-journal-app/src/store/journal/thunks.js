import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
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
};

export const startSaveNote = () => {
    return async(dispatch, getState) => {
        
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const noteToFireStore = { ...activeNote };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ activeNote.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote( activeNote ) );

    }
}

export const startUploadinFiles = (files = []) => {
    return async(dispatch) => {
        dispatch(setSaving());
        
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) );
        };

        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch(setPhotosToActiveNote( photosUrls ));
    }
};

export const startDeletingNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ activeNote.id }` );
        await deleteDoc(docRef);

        dispatch( deleteNoteById( activeNote.id ) );
    }
}