import React from 'react'
import { GridColumn, Icon, Image, Label } from 'semantic-ui-react'
import pokeReducer from '../../reducers/pokeReducer'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'

const PokeCard = ({pokemon}) => {
    return <div className='PokeCard'>
        <GridColumn mobile={16} tablet={8} computer={4}>
            <Icon name='favorite' color={FAV_COLOR}/>
            <Image centered src={pokemon.sprites.front_default} alt="PokeInit"/>
            <p>{pokemon.name}</p>
            {pokemon.types.map((t,id) => <Label color={MAIN_COLOR} key={id}>{t.type.name}</Label>)}
        </GridColumn>
    </div>
}
export default PokeCard;