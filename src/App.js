import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";
import IndividualPost from "./components/Recipes/IndividualPost";
import RECIPES from "./components/SearchBar/RECIPES.json";
import HomepageShowGroup from "./components/HomePage/HomepageShowGroup/HomepageShowGroup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/recipe-pages/:postid" element={<IndividualPost />} />

        <Route
          path="/homapage-show-group/:postid"
          element={<HomepageShowGroup />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
