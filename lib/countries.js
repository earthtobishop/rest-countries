import { fetchJson } from "./api";

// https://restcountries.com/v2/{service}?fields={field},{field},{field}
// https://restcountries.com/v2/all?fields=name,capital,currencies
// name, population, region capital

export async function getCountries() {
  const countries = await fetchJson(
    `https://restcountries.com/v2/all?fields=name,population,region,flags,capital`
  );
  return countries;
}
