import { useState } from "react";
import { CharactersList } from "./components/CharactersList";

function App() {
  const [page, setPage] = useState(1);

  const ButtonPage = () => {
    return (
      <div className="flex justify-center items-center">
        <button
          id="less"
          onClick={changePage}
          className="bg-blue-600 shadow rounded-md text-white px-6 py-1 m-3 text-lg"
        >
          {"<"}
        </button>
        <span className="text-xl">{page}</span>
        <button
          id="plus"
          onClick={changePage}
          className="bg-blue-600 shadow rounded-md text-white px-6 py-1 m-3 text-lg"
        >
          {">"}
        </button>
      </div>
    );
  };

  const changePage = (e) => {
    const result = e.target.id === "plus" ? page + 1 : page - 1;
    if (result > 42) return setPage(1);
    if (result < 1) return setPage(42);
    setPage(result);
  };

  return (
    <div className="App">
      <h1 className="text-4xl border-b-2 text-center mb-4 pb-5 md:text-5xl xl:text-6xl 2xl:text-7xl ">
        Rick and Morty
      </h1>
      <CharactersList page={page} />
      <ButtonPage />
    </div>
  );
}

export default App;
