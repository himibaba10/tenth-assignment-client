import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";

function App() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col min-h-screen ${darkTheme && "dark"}`}>
      <Header />
      <Outlet />
      <Footer />
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        className={`absolute top-20 text-sm sm:text-base sm:top-3 right-3 ${
          darkTheme ? "bg-white text-blue-950" : "bg-blue-950 text-white"
        } p-2 rounded`}
      >
        Set {darkTheme ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default App;
