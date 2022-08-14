import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";
import RecipePages from "./components/Recipes/RecipePages/RecipePages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/recipe-pages" element={<RecipePages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
