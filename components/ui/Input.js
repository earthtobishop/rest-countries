import React from "react";

function Input({ searchText, setSearchText }) {
  return (
    <>
      <input
        type="text"
        className="
        form-control
        block
        w-1/4
        px-3
        py-4
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        shadow-xl
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        id="exampleFormControlInput1"
        placeholder="Search for a country"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </>
  );
}

export default Input;
