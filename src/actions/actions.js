import axios from 'axios';
import { getPokemons } from '../api/getPokemons';
import * as actions from '../utils/actionTypes';

export const setPokemonAction = (pokemons) => {
    return {
        type: actions.SET_POKEMOM,
        payload: pokemons
    };
};

export const getPokemonDetailedAction = () => (dispatch) => {
   getPokemons().then(res=>{
       const pokeList = res.results;
       return Promise.all(pokeList.map(p=>axios.get(p.url)))
   })
   .then(pokeResponse => {
       const pokeInfo = pokeResponse.map(response => response.data);
       dispatch(setPokemonAction(pokeInfo));
   });
};
