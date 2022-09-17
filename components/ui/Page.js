import Head from "next/head";
import Navbar from "./Navbar";
import { useTheme } from "../../lib/ThemeContext";

function Page({ title, children }) {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor
        }}
        className="p-10 py-8"
      >
        {children}
      </main>
    </>
  );
}

export default Page;
