import React from 'react';
import useFecthCharacters from './hooks/useFecthCharacters';
import PokemonCharacter from './pokemon/PokemonCharacter';
import RickMortyCharacter from './rick&morty/RickMortyCharacter';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {data, error} = useFecthCharacters();

  const pokemonInfo = useFecthCharacters(urlPokemon);
  const rickMortyInfo = useFecthCharacters(urlRick);

  let errorMessage = '';
  if(pokemonInfo.error) {
    errorMessage = <p>No se pudo realizar la solicitud a la Api de Pokemon</p>
    return errorMessage;
  };

  if(rickMortyInfo.error) {
    errorMessage = <p>No se pudo realizar la solicitud a la Api de Rick y Morty</p>
    return errorMessage;
  };

  if (!pokemonInfo.data || !rickMortyInfo.data) {
    return null;
  };

  return (
    <div className='characters'>
      <PokemonCharacter 
        name={pokemonInfo.data.name}
        image={pokemonInfo.data.sprites.other.dream_world.front_default}
        alt={pokemonInfo.data.name}
      />
      <RickMortyCharacter 
        name={rickMortyInfo.data.name}
        image={rickMortyInfo.data.image}
        alt={rickMortyInfo.data.name}
      />
    </div>
  );
};

export default App;
