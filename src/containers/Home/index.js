import React,{useEffect} from 'react';
import PokeList from '../../components/PokeList';
import Searcher from '../../components/Searcher';
import './styles.css';
import {getPokemons} from '../../api/getPokemons'

function Home() {
  useEffect(() => {
    getPokemons().then(res =>console.log(res));
  });

  return (
    <div className='Home'>
      <Searcher />
      <PokeList/>
    </div>
  );
}

export default Home;
