import React from "react";
import Country from "./Country";

function CountryList({ countries }) {
  return (
    <div className="mt-8 grid gap-20 grid-cols-4 grid-rows-2">
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
