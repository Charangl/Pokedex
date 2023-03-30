import { useEffect } from "react";

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}){
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

    useEffect(() => {
      if (pokemonList[pokemonIndex].name === "pikachu") {
        alert("pika pikachu !!!");
      }
    });

    return (<div>
        <button onClick={handleClickPrev} hidden={pokemonIndex === 0}>
        {"Précédent"}
      </button>
      <button
        onClick={handleClickNext}
        hidden={pokemonIndex === pokemonListLength - 1}
      >
        {"Suivant"}
      </button></div>
      );
      
    }

    export default NavBar;



    