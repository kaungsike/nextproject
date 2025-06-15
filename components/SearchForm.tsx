"use client";
import { useStartUpStore } from "@/store/useStartUpStore";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SearchForm = ({ query }: { query?: string }) => {
  const {
    register,
    reset,
    handleSubmit,
  } = useForm<Inputs>();

  const {setStartUp} = useStartUpStore();

  const submitForm = (data: Inputs) => {
    console.log(data);
    setStartUp(data.example);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="mt-5 w-full flex justify-center">
      <input
        className="bg-white rounded-full focus:outline-0 border-2 border-black text-black h-[50px] max-w-[400px] w-full px-5"
        defaultValue={query ?? ""}
        {...register("example")}
        type="search"
        placeholder="Search Startups"
      />
    </form>
  );
};

export default SearchForm;
