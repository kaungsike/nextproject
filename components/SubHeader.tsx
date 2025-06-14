import React from "react";
import Container from "./Container";
import SearchForm from "./SearchForm";

const SubHeader = () => {
  return (
    <div className="bg-[var(--only-me)] text-white py-8">
      <Container>
        <h2 className="text-black text-center w-full text-2xl lg:text-6xl font-bold">
          Pitch Your Startup,
          <br />
          Connect With Entrepreneur
        </h2>
        <SearchForm/>
      </Container>
    </div>
  );
};

export default SubHeader;
