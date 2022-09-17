import { useEffect } from "react";
import "../styles/globals.css";

import { ThemeProvider } from "../lib/ThemeContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
