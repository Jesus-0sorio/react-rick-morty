import { useState, useEffect } from "react";
import { CharactersList } from "./components/CharactersList";

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchData()
  }, []);
  return <div className="App">
    <h1 className="text-4xl text-center my-6">Rick and Morty</h1>
    <CharactersList characters={characters} />
    <div className="flex justify-center items-center">
      <button>{'<'}</button>
      <button>{'>'}</button>
    </div>
  </div>;
}

export default App;
