import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Working from "./components/Working";
import Impact from "./components/Impact";


const App = () => {
  return (
    <>
      <div className='topContainer'>
        <Navbar />
        <Hero />
        <Introduction />
        <Working />
        <Impact />
        <Testimonial/>
        <Faq/>
        <Footer />
      </div>
    </>
  );
};

export default App;
