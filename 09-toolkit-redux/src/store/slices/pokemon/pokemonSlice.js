import { createSlice } from '@reduxjs/toolkit';

    export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
      page: 0,
      pokemons: [],
      isLoading: false
      },
    reducers: {
      startLoadingP: (state, /* action */ ) => {
        state.isLoading = true;
      },
      setP: (state, action) => {
        state.isLoading = false,
        state.page = action.payload.page;
        state.pokemons = action.payload.pokemons;
      }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingP, setP } = pokemonSlice.actions;