import useFecthCharacter from "./hooks/useFecthCharacters";
import "./App.css";
import TemplateCharacter from "./components/TemplateCharacter";

function App() {
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1";
  const urlRick = "https://rickandmortyapi.com/api/character/1";

  const { data: pokemon } = useFecthCharacter(urlPokemon);
  const { data: rick} = useFecthCharacter(urlRick);

  return (
    <>
      {!pokemon ? "...loading" : <TemplateCharacter title= "pokemon" name={pokemon.name} image={pokemon.sprites?.front_default}/>
     }
      {!rick ? 
        "...loading"
      : 
        <>
          <p>{rick.name}</p>
          <img src={rick.image} alt="" />
        </>
     }


    </>
  );
}

export default App;
