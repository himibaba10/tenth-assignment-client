import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
