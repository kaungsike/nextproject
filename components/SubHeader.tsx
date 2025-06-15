import React from "react";
import Container from "./Container";
import SearchForm from "./SearchForm";

const SubHeader = ({ searchParams }: { searchParams?: { query?: string } }) => {
  const query = searchParams?.query || "";

  return (
    <div className="bg-[var(--only-me)] text-white py-8">
      <Container>
        <h2 className="text-black text-center w-full text-2xl lg:text-6xl font-bold">
          Pitch Your Startup,
          <br />
          Connect With Entrepreneur
        </h2>
        <p className="text-center mt-3 font-bold lg:text-lg text-sm">
          Submit ideas, Vote on Pitches, <br className="lg:hidden block" /> and
          Get Noticed in <br className="hidden lg:block" /> Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </Container>
    </div>
  );
};

export default SubHeader;
