import React from "react";
import { Grid } from "semantic-ui-react";
import PokeCard from './PokeCard';
import './styles.css';
const PokeList = ({pokemons}) => {
    //const pokemons = [];
    //const pokemons = Array(20).fill('');

    return (
        <Grid className="pokelist">
            {
                pokemons.map((p,id)=>{
                    return <PokeCard pokemon={p} key={`pokeID-${id}`}/>
                })
            
            };
        </Grid>
    );
};

PokeList.defaultProps = {
    pokemons:[]
}

export default PokeList;