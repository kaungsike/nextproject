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
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.description}</p>
      <p className="text-sm text-gray-500">
        Category: <strong>{post.category}</strong>
      </p>
      <p className="text-sm text-gray-500">
        Author: <strong>{post.author?.name}</strong>
      </p>
    </div>
  );
};

export default StartupDetailContainer;
