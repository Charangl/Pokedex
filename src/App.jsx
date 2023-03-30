import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPokemon from './components/PokemonCard'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonListLength = pokemonList.length;
  const handleClickPrev = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const handleClickNext = () => {
    if (pokemonIndex < pokemonListLength - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (<div>
      <MyPokemon pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleClickPrev} hidden={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        hidden={pokemonIndex === pokemonListLength - 1}
      >
        Suivant
      </button></div>
  );
}

export default App;