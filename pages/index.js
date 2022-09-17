import { useState } from "react";
import CountryList from "../components/countries/CountryList";
import Input from "../components/ui/Input";
import Dropdown from "../components/ui/Dropdown";
import Page from "../components/ui/Page";
import Paginiation from "../components/ui/Paginiation";
import { getCountries, getCountriesByRegion } from "../lib/countries";

export async function getStaticProps() {
  const countries = await getCountries();
  return {
    props: {
      countries
    }
  };
}

function HomePage({ countries }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(8);
  const [region, setRegion] = useState(null);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const nPages = Math.ceil(countries.length / countriesPerPage);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const handleSetRegion = (region) => {
    if (region === "Choose A Region" || undefined) {
      setRegion(null);
    } else {
      setRegion(region);
    }
  };

  return (
    <Page title="Rest Countries">
      <div className="flex justify-between">
        <Input />
        <Dropdown handleSetRegion={handleSetRegion} />
      </div>
      <CountryList
        countries={
          region ? getCountriesByRegion(countries, region) : currentCountries
        }
      />
      <Paginiation nextPage={nextPage} prevPage={prevPage} />
    </Page>
  );
}

export default HomePage;
