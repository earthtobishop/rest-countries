import { fetchJson } from "./api";

// https://restcountries.com/v2/{service}?fields={field},{field},{field}
// https://restcountries.com/v2/all?fields=name,capital,currencies
// name, population, region capital

export async function getCountries() {
  const countries = await fetchJson(
    `https://restcountries.com/v2/all?fields=name,population,region,flags,capital,nativeName`
  );
  return countries;
}

export async function getCountry(name) {
  const country = await fetchJson(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return country[0];
}

export function getCountriesByRegion(countries, region) {
  return countries.filter(
    (country) => country.region.toLowerCase() === region.toLowerCase()
  );
}
