import React from "react";
import StartupDetailContainer from "../components/StartupDetailContainer";
import BreadCrumbContainer from "@/components/BreadCrumbContainer";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <div className="mt-5">
      <BreadCrumbContainer currentPage="Startup Detail" parentPage="Startups" />
      <StartupDetailContainer id={id} />
    </div>
  );
};

export default page;
