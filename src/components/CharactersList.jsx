import React, { useEffect, useState } from "react";
import { Character } from "./Character";

export function CharactersList({ page }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(page);
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <div className="grid grid-cols-1 gap-3 place-items-center grid-flow-dense h-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {loading ? (
        <div>Cargando</div>
      ) : (
        characters.map((character) => (
          <Character key={character.id} character={character} />
        ))
      )}
    </div>
  );
}
