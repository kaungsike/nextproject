import { client } from "@/sanity/lib/client";
import { STARTUP_VIEW_BY_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";
import { LiveProviderWrapper } from "./LiveProviderWrapper";
import { Button } from "./ui/button";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
  const post = await client.fetch(STARTUP_VIEW_BY_ID_QUERY, { id });

  await writeClient
    .patch(id)
    .set({ views: post.views + 1 })
    .commit();

  return (
    <>
      <LiveProviderWrapper>
<div className="relative inline-block">
  {/* 🔴 Animated Dot - moved slightly inside */}
  <span className="absolute top-1.1 right-[-2px]">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
    </span>
  </span>

  <Button className="w-[80px] hover:bg-white bg-white text-black border border-[var(--only-me)]">
    {post.views !== null
      ? (post.views > 1 ? "Views: " : "View: ") + post.views
      : "Loading..."}
  </Button>
</div>

      </LiveProviderWrapper>
    </>
  );
};

export default View;
