import { useState } from "react";
import CountryList from "../components/countries/CountryList";
import Input from "../components/ui/Input";
import Page from "../components/ui/Page";
import Paginiation from "../components/ui/Paginiation";
import { getCountries } from "../lib/countries";

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
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const nPages = Math.ceil(countries.length / countriesPerPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  console.log(countries);
  return (
    <Page title="Rest Countries">
      <Input />
      <CountryList countries={currentCountries} />
      <Paginiation nextPage={nextPage} prevPage={prevPage} />
    </Page>
  );
}

export default HomePage;
