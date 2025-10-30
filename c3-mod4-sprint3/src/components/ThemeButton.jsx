
import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
        theme === "light"
          ? "bg-amber-700 text-white hover:bg-amber-800"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
};

export default ThemeButton;

