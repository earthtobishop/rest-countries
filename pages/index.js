import Input from "../components/ui/Input";
import Page from "../components/ui/Page";
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
  console.log(countries);
  return (
    <Page title="Rest Countries">
      <Input />
    </Page>
  );
}

export default HomePage;
