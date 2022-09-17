import { useState } from "react";

function Dropdown({ handleSetRegion }) {
  const [selected, setSelected] = useState("Choose A Region");
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleChange = (region) => {
    setSelected(region);
    handleSetRegion(region);
  };

  return (
    <div className="flex justify-center">
      <label
        htmlFor="large"
        className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
      ></label>
      <select
        defaultValue={selected}
        onChange={(e) => handleChange(e.target.value)}
        id="large"
        className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="Choose A Region">Choose A Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
