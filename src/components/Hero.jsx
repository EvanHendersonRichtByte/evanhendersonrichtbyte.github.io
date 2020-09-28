import React from "react";
import BlockQuote from "./BlockQuote";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero vh-100 align-items-center shadow">
      <Header />
      <BlockQuote
        quote="Intelligence is the ability to adapt to change."
        author="Stephen Hawking"
      />
    </div>
  );
};

export default Hero;