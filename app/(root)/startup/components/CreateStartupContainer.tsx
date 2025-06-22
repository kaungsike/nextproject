
import Container from "@/components/Container";
import React from "react";
import CreateStartupForm from "./CreateStartupForm";

const CreateStartupContainer = () => {
  return (
    <>
      <div className="bg-[var(--only-me)] text-white py-8 mt-5 min-h-[250px] pt-[70px]">
        <Container className="flex flex-col items-center justify-center">
          <h2 className="text-black text-center w-full text-2xl lg:text-6xl font-bold">
            SUBMIT YOUR STARTUP
          </h2>
          <p className="bg-yellow-400 mt-5 rounded-md text-black font-bold text-sm p-2 mx-auto w-[120px] text-center">
            {new Date().toISOString().split("T")[0]}
          </p>

        </Container>
      </div>
      <div>
        <Container>
          <CreateStartupForm/>
        </Container>
      </div>
    </>
  );
};

export default CreateStartupContainer;
