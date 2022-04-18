import React,{useEffect} from 'react';
import PokeList from '../../components/PokeList';
import Searcher from '../../components/Searcher';
import './styles.css';
import { getPokemons } from '../../api/getPokemons'
import { setPokemonAction } from '../../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  pokemons: state.list
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: value => dispatch(setPokemonAction(value))
});


function Home({pokemons,setPokemons}) {
  useEffect(() => {
    getPokemons().then(res =>setPokemons(res.results));
  });

  return (
    <div className='Home'>
      <Searcher />
      <PokeList/>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
