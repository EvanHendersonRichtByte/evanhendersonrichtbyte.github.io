import React from "react";
import BlockQuote from "../components/BlockQuote";
import Header from "../components/Navbar";

const Hero = () => {
  return (
    <header className="hero vh-100 align-items-center shadow">
      <Header />
      <BlockQuote
        quote="Intelligence is the ability to adapt to change."
        author="Stephen Hawking"
      />
    </header>
  );
};

export default Hero;
