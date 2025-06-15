"use client";
import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useStartUpStore } from '../store/useStartUpStore'
import usePostsStore from '@/store/usePostsStore';
import StartUpCard from './StartUpCard';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

const StartUpContainer = () => {
  const { startUp } = useStartUpStore();
  const { posts, setPosts } = usePostsStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const sanityPosts = await client.fetch(STARTUPS_QUERY);
      setPosts(sanityPosts);
      setLoading(false);
    }
    fetchPosts();
  }, [setPosts]);

  console.log(posts)

  if (loading) return <div>Loading...</div>;

  return (
    <div className='pt-7'>
      <Container>
        <h1 className='text-3xl font-bold'>{startUp || "All Startups"}</h1>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {posts.length > 0 && posts?.map((post) => (
            <StartUpCard key={post?._id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StartUpContainer;
