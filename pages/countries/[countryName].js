import Image from "next/image";
import Link from "next/link";
import Page from "../../components/ui/Page";
import { getCountries, getCountry } from "../../lib/countries";
import { useTheme } from "../../lib/ThemeContext";

export async function getStaticPaths() {
  const countries = await getCountries();
  const paths = countries.map((country) => ({
    params: { countryName: country.name.toString() }
  }));

  return {
    paths,
    fallback: "blocking"
  };
}

export async function getStaticProps({ params: { countryName } }) {
  try {
    const country = await getCountry(countryName);

    return {
      props: { country }
    };
  } catch (error) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}

function CountryPage({ country }) {
  const { theme } = useTheme();
  const languages = Object.values(country.languages);
  console.log(country);
  return (
    <Page title="Rest Countries">
      <Link href="/">
        <button
          style={{
            backgroundColor: theme.textColor,
            color: theme.backgroundColor
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mb-10"
        >
          <a>Back</a>
        </button>
      </Link>

      <div className="flex flex-col justify-center">
        <h1 className="text-center text-5xl mb-4">{country.name.common}</h1>
        <div className="flex justify-center">
          <Image src={country.flags.png} height="300" width="320" alt="flg" />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="mt-1">
              <div className="font-semibold">
                Native Name: {country.name.common}
              </div>{" "}
            </div>
            <div className="mt-1">
              <div className="font-semibold">
                Population: {country.population}
              </div>{" "}
            </div>
            <div className="mt-1">
              <div className="font-semibold">Region: {country.region} </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-1">
              <div className="font-semibold">Capital: {country.capital[0]}</div>{" "}
            </div>
            <div className="mt-1">
              <div className="font-semibold">
                Languages: {languages.join(", ")}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default CountryPage;
