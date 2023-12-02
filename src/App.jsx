import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
