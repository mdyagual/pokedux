import React,{useEffect} from 'react';
import PokeList from '../../components/PokeList';
import Searcher from '../../components/Searcher';
import './styles.css';
//import { getPokemons } from '../../api/getPokemons'
import { getPokemonDetailedAction, setPokemonAction } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
//import axios from 'axios';
//import { connect } from 'react-redux';

/*const mapStateToProps = (state) => ({
  pokemons: state.list
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: value => dispatch(setPokemonAction(value))
});
*/

function Home() {
  const dispatch = useDispatch();

  const list = useSelector(state => state.list)

  useEffect(() => {   
      dispatch(getPokemonDetailedAction())

  },[]);

  return (
    <div className='Home'>
      <Searcher />
      <PokeList pokemons={list}/>
    </div>
  );
}

//export default connect(mapStateToProps,mapDispatchToProps)(Home);
export default (Home);