import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GridColumn, Icon, Image, Label } from 'semantic-ui-react'
import { setFavoriteAction } from '../../actions/actions'
import pokeReducer from '../../reducers/pokeReducer'
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from '../../utils/constants'

const PokeCard = ({pokemon}) => {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    const handleFavorite = () => {
        dispatch(setFavoriteAction(pokemon.id));
    };
    return <div className='PokeCard'>
        <GridColumn mobile={16} tablet={8} computer={4}>
            <button className='PokeCard-favorite' onClick={handleFavorite}>
                <Icon name='favorite' color={favorites[pokemon.id]?FAV_COLOR:DEFAULT_COLOR}/>
            </button>
            <Image centered src={pokemon.sprites.front_default} alt="PokeInit"/>
            <p className='PokeCard-title'>{pokemon.name}</p>
            {pokemon.types.map((t,id) => <Label color={MAIN_COLOR} key={id}>{t.type.name}</Label>)}
        </GridColumn>
    </div>
}
export default PokeCard;