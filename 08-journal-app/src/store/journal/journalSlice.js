import { createSlice } from '@reduxjs/toolkit';

    export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // activeNote: {
        //     id: ABC123,
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: [], //hhtps://foto1.jpg, hhtps://foto2.jpg, hhtps://foto3.jpg
        // }
      },
    reducers: {
      savingNewNote: (state) => {
        state.isSaving = true;
      },
      addNewEmptyNote: (state, action) => {
        state.notes.push( action.payload );
        state.isSaving = false;
      },
      setActiveNote: (state, action) => {
        state.activeNote = action.payload;
      },
      setNotes: (state, action) => {
        state.notes = action.payload;
      },
      setSaving: (state) => {

      },
      updateNote: (state, action) => {

      },
      deleteNoteById: (state, action) => {

      },
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    setActiveNote,
    addNewEmptyNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById } = journalSlice.actions;