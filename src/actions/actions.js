import * as actions from '../utils/actionTypes';

export const setPokemonAction = (pokemons) => {
    return {
        type: actions.SET_POKEMOM,
        payload: pokemons
    };
};
