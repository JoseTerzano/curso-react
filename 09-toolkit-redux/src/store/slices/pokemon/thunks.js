import { pokemonApi } from "../../../api/pokemonApi";
import { setP, startLoadingP } from "./pokemonSlice"



export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingP() );

        //TODO: realizar peticion hhtp
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`)
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10}`);


        dispatch( setP({ pokemons: data.results, page: page + 1 }) )
        // dispatch( setP() );
    }
}