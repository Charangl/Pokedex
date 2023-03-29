import PropTypes from "prop-types";
  
  function MyPokemon({pokemon}){
    return (
        <figure>
          {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      );
    }

MyPokemon.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  })
}

  export default MyPokemon;