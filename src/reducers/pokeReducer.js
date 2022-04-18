import * as actions from '../utils/actionTypes';

const initialState = {
    list: [],
    loading: true,
    favorites: {}
};

const pokeReducer = (state = initialState,action)=>{
    switch(action.type){
        case actions.SET_POKEMOM:
            return {...state,list:action.payload};
        case actions.SET_LOADER:
            return {...state, loading: !state.loading};
        case actions.SET_FAVORITE:
            const pokeFav = state.favorites[action.payload];
            return {...state, 
                    favorites : {...state.favorites, [action.payload]:!pokeFav}
                   }
        default:
            return {... state};
    }
}

export default pokeReducer;