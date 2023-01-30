import React from "react";

export function Character({ character }) {
  const status =
    character.status === "Alive"
      ? "bg-green-400 text-center p-2 rounded-2xl align-middle"
      : "bg-red-500 text-center  p-2  rounded-2xl align-middle";

  return (
    <div className="container rounded-xl border shadow flex flex-col items-center w-80 p-3 bg-gray-300">
      <h2 className="text-2xl font-bold text-center">{character.name}</h2>
      <img
        className="rounded-lg shadow-2xl shadow-white my-2 w-64"
        src={character.image}
        alt={`Picture ${character.name}`}
      />
      <p className="w-7/12 text-left text-lg">
        <span className="font-bold">Status:</span> {character.status}{" "}
        <button className={status} disabled />
      </p>
      <p className="w-7/12 text-left text-lg">
        <span className="font-bold">Species:</span> {character.species}
      </p>
      <p className="w-7/12 text-left text-lg">
        <span className="font-bold">Gender:</span> {character.gender}
      </p>
      <button className="bg-blue-600 shadow text-lg my-3 w-6/12 text-white px-7 py-1 rounded-lg mx-auto">
        Info
      </button>
    </div>
  );
}
