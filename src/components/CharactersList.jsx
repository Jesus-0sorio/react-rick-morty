import React from "react";
import { Character } from "./Character";

export function CharactersList({ characters }) {
  console.log(characters)
  return (
    <div className="grid grid-cols-1 gap-3 place-items-center grid-flow-dense h-full">
      {characters.map(character => <Character character={character} />)}
    </div>
  );
}
