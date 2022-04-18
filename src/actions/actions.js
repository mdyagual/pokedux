import axios from 'axios';
import { getPokemons, getPokemonsDetailed } from '../api/getPokemons';
import * as actions from '../utils/actionTypes';

export const setPokemonAction = (pokemons) => {
    return {
        type: actions.SET_POKEMOM,
        payload: pokemons
    };
};

export const getPokemonDetailedAction = () => async (dispatch) => {
    try{
        const response = await getPokemons();
        const pokemons = response.results;
        const pokemonsDetailed = await getPokemonsDetailed(pokemons);
        //console.log("PokeDetailed: ",pokemonsDetailed)
        dispatch(setPokemonAction(pokemonsDetailed));
        dispatch(setLoaderAction());
    }catch (error){
        console.log(error);
        dispatch(setLoaderAction());
    }
    
};

export const setLoaderAction = () => {
    return {
        type: actions.SET_LOADER
    };
};

export const setFavoriteAction = (id) => {
    return {
        type: actions.SET_FAVORITE,
        payload: id
    };
};