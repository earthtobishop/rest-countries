import React, { useContext, useState } from "react";

export const themes = {
  light: {
    textColor: "#111517",
    inputColor: "#858585",
    backgroundColor: "#fafafa",
    elementsColor: "#ffffff"
  },
  dark: {
    elementsColor: "#2b3945",
    backgroundColor: "#202c37",
    textColor: "#ffffff"
  }
};

export const ThemeContext = React.createContext({
  theme: undefined,
  setTheme: async (theme) => null,
  setCurrentTheme: async (currentTheme) => null
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, currentTheme, setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
