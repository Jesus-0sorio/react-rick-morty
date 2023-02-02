import React from "react";

export const Modal = ({ visible, handleModal, character }) => {
  if (!visible) return null;

  return (
    <div id="modal-component" className="fixed inset-0">
      <div className="modal-flex-container flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="modal-bg-container fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div
          className="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all
        sm:my-8 sm:align-middle sm:max-w-lg w-full"
        >
          <div className="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="modal-wrapper-flex sm:flex sm:items-start">
              <div className="modal-icon m-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-60"><img
        className="rounded-lg shadow-2xl shadow-white my-2 w-64"
        src={character.image}
        alt={`Picture ${character.name}`}
      /></div>
              <div className="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium text-gray-900">{character.name}</h3>
                <div className="modal-text mt-2">

                  <p className="text-gray-500 text-sm">
                    Seguro que lo quiere eliminar el elemento
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:items-center sm:justify-center">
            <button
              onClick={handleModal}
              className="close bg-red-500 w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 sm:mt-0 sm:w-auto sm:text-sm "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
