import React, { useState, useEffect } from "react";
import { GrStatusGoodSmall } from "react-icons/gr";

export const Modal = ({ visible, handleModal, character, statusCharacter }) => {
  const [episode, setEpisode] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(character.episode[0]);
      const data = await res.json();
      setEpisode(data);
    };
    fetchData()
  }, []);
  if (!visible) return null;
  return (
    <div id="modal-component" className="fixed inset-0">
      <div className="modal-flex-container flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="modal-bg-container fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div
          className="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all
        sm:my-8 sm:align-middle sm:max-w-xl w-full"
        >
          <div className="modal-wrapper h-full sm:h-72 bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center">
            <div className="modal-wrapper-flex sm:flex sm:items-start">
              <div className="modal-icon m-auto flex-shrink-0 flex items-center justify-center h-40 w-40 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-60">
                <img
                  className="rounded-lg shadow-2xl shadow-white my-2 w-64"
                  src={character.image}
                  alt={`Picture ${character.name}`}
                />
              </div>
              <div className="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-center">
                <h3 className="font-medium text-2xl text-gray-900">
                  {character.name}
                </h3>
                <div className="modal-text">
                  <p className="text-left text-md">
                    <span className="flex my-1 justify-center items-center">
                      <GrStatusGoodSmall color={statusCharacter} />
                      {`${character.status} - ${character.species}`}
                    </span>
                  </p>
                  <div className="grid grid-cols-1 gap-1 text-left">
                    <p>
                      <span className="font-medium mr-2">Gender:</span>
                      {character.gender}
                    </p>
                    <p>
                      <span className="font-medium mr-2">Origin:</span>
                      {character?.origin?.name || "unknown"}
                    </p>
                    <p>
                      <span className="font-medium mr-2">Last location:</span>
                      {character?.location?.name || "unknown"}
                    </p>
                    <p>
                      <span className="font-medium mr-2">First seen in:</span>
                      {episode.name || "unknown"}
                    </p>
                    <p>
                      <span className="font-medium mr-2">First viewed:</span>
                      {episode.air_date || "unknown"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:items-center sm:justify-center">
            <button
              onClick={handleModal}
              className="close bg-red-500 w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 sm:mt-0 sm:w-auto sm:text-md "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
