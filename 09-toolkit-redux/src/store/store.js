import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, pokemonSlice } from "./slices";
import { todosApi } from './apis/todosApi';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [ todosApi.reducerPath ]: todosApi.reducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosApi.middleware )
})