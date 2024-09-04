import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";


const App = () => {
  return (
    <>
      <div className='topContainer'>
        <Navbar />
        <Hero />
        <Introduction />
      </div>
    </>
  );
};

export default App;
