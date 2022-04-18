import React from "react";
import { Grid } from "semantic-ui-react";
import PokeCard from './PokeCard';
import './styles.css';
const PokeList = () => {
    //const pokemons = [];
    const pokemons = Array(20).fill('');

    return (
        <Grid className="pokelist">
        {pokemons.map((p => (<PokeCard/>)))}
        </Grid>
    );
}

export default PokeList;