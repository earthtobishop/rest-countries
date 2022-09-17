import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../lib/ThemeContext";

function Country({ country }) {
  const { theme } = useTheme();

  return (
    <Link href={`/countries/${country.name}`}>
      <a>
        <div
          className="flex flex-col	 shadow-xl pb-12 hover:shadow-2xl hover:cursor-pointer"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <Image src={country.flags.png} alt="flag" height="225" width="320" />
          <div className="mt-5 px-4">
            <div className="font-extrabold">{country.name}</div>
            <div className="mt-3">
              <span className="font-semibold">Population: </span>
              {country.population}
            </div>
            <div className="mt-1">
              <span className="font-semibold">Region: </span> {country.region}
            </div>
            <div className="mt-1">
              <span className="font-semibold">Capital: </span> {country.capital}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Country;
