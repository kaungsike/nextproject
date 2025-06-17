import Container from "@/components/Container";
import View from "@/components/View";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";

const StartupDetailContainer = async ({ id }: { id: string }) => {
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  console.log(post);

  if (!post) {
    return <div className="p-4 text-gray-500">Loading or Not Found...</div>;
  }

  return (
    <>
      <div className="bg-[var(--only-me)] text-white py-8 mt-5">
        <Container>
          <h2 className="text-black text-center w-full text-2xl lg:text-6xl font-bold">
            {post.title}
          </h2>
          <p className="text-center max-w-[700px] mx-auto mt-3 font-bold lg:text-lg text-sm">
            {post.description}
          </p>
          <p className="bg-yellow-400 mt-5 rounded-md text-black font-bold text-sm p-2 mx-auto w-[120px] text-center">
            {new Date(post._createdAt).toISOString().split("T")[0]}
          </p>
        </Container>
      </div>
      <div>
        <Container>
          <div className="w-full max-w-[700px] rounded-lg overflow-hidden mx-auto mt-5">
            <img src={post.image} className="w-full " alt={post.title} />
          </div>
        </Container>
        <Container>
          <View id={id}/>
        </Container>
      </div>
    </>
  );
};

export default StartupDetailContainer;
