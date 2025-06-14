import React from "react";
import { Input } from "@/components/ui/input";

const SearchForm = () => {

    console.log("from what?")

  return (
<form action="/search" method="GET" className="mt-5">
  <Input
    name="query"
    type="search"
    placeholder="Search Startups"
    className="bg-white rounded-full border-none text-black h-[50px] max-w-[400px] w-full mx-auto"
  />
</form>

  );
};

export default SearchForm;
