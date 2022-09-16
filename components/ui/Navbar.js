import { useTheme, themes } from "../../lib/ThemeContext";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";

function Navbar() {
  const { theme, setTheme, currentTheme, setCurrentTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
    setCurrentTheme(theme === themes.dark ? "light" : "dark");
  };

  return (
    <nav
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      className="py-8 px-8 flex justify-between justify-items-center drop-shadow-md"
    >
      <h1 className="font-extrabold">Where in the world?</h1>
      <button onClick={toggleTheme} className="flex gap-2 items-center">
        <div>
          {currentTheme === "light" ? (
            <BsMoon style={{ display: "inline" }} />
          ) : (
            <BsFillMoonFill style={{ display: "inline" }} />
          )}
        </div>
        <div>Dark Mode</div>
      </button>
    </nav>
  );
}

export default Navbar;
