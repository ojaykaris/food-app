import React from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
