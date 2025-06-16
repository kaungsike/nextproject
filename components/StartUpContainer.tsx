"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import { useStartUpStore } from "../store/useStartUpStore";
import usePostsStore from "@/store/usePostsStore";
import StartUpCard from "./StartUpCard";
import { useLiveQuery } from "@sanity/preview-kit";
import { getStartupsQuery } from "@/sanity/lib/queries";
import { Button } from "./ui/button";
import { RxCross2 } from "react-icons/rx";
import StartUpCardSkeleton from "./StartUpCardSkeleton";

const StartUpContainer = () => {
  const { startUp, resetStartUp } = useStartUpStore();
  const { posts, setPosts } = usePostsStore();

  const query = getStartupsQuery(startUp);
  const [data, loading] = useLiveQuery(posts, query);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setPosts(data);
    }
  }, [data, setPosts]);


  return (
    <div className="pt-7">
      <Container>
        <div className="flex items-center gap-5">
          <p className="text-3xl font-bold">
            {startUp ? `Search result for: ${startUp}` : "All Startups"}
          </p>
          {startUp && (
            <Button
              variant="destructive"
              size="icon"
              className="size-8 rounded-full"
              onClick={() => resetStartUp()}
            >
              <RxCross2 />
            </Button>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <StartUpCardSkeleton key={i} />
              ))
            : posts.map((post) => <StartUpCard key={post._id} post={post} />)}
        </div>
      </Container>
    </div>
  );
};

export default StartUpContainer;
