import React from 'react'
import { GridColumn, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'

const PokeCard = () => {
    return <div className='PokeCard'>
        <GridColumn mobile={16} tablet={8} computer={4}>
            <Icon name='favorite' color={FAV_COLOR}/>
            <Image centered src="" alt="PokeInit"/>
            <p>PokeNombre</p>
            <Label color={MAIN_COLOR}>Normal</Label>
        </GridColumn>
    </div>
}
export default PokeCard;