import * as actions from '../utils/actionTypes';

const initialState = {
    list: []
};

const pokeReducer = (state = initialState,action)=>{
    switch(action.type){
        case actions.SET_POKEMOM:
            return {...state,list:action.payload};
        default:
            return {... state};
    }
}

export default pokeReducer;