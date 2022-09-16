import Head from "next/head";
import Navbar from "./Navbar";

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Page;
