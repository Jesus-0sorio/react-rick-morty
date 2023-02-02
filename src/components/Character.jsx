import React, { useState } from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { Modal } from "./Modal";

export function Character({ character }) {
  const [showModal, setShowModal] = useState(false);

  const { name, status, image, gender, species } = character;
  const statusCharacter = status === "Alive" ? "green" : "red";
  const handleModal = () =>
    !showModal ? setShowModal(true) : setShowModal(false);
  return (
    <div className="container rounded-xl border shadow flex flex-col items-center w-80 p-3 bg-gray-300">
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <img
        className="rounded-lg shadow-2xl shadow-white my-2 w-64"
        src={image}
        alt={`Picture ${name}`}
      />
      <p className="text-left text-lg">
        <span className="flex justify-around items-center">
          <GrStatusGoodSmall color={statusCharacter} />
          {`${status} - ${species}`}
        </span>
      </p>
      <p className="w-5/12 flex justify-center text-left text-lg">{gender}</p>
      <button
        onClick={handleModal}
        className="bg-blue-600 shadow text-lg my-2 w-6/12 text-white px-7 py-1 rounded-lg mx-auto"
      >
        Info
      </button>
      <Modal
        visible={showModal}
        handleModal={handleModal}
        character={character}
        statusCharacter={statusCharacter}
      />
    </div>
  );
}
