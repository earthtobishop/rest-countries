import React from "react";

function Paginiation({ prevPage, nextPage }) {
  return (
    <div className="mt-5 flex justify-center">
      <button
        onClick={prevPage}
        className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Previous
      </button>
      <button
        onClick={nextPage}
        className="mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Paginiation;
