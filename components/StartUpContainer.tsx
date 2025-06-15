"use client";
import React from 'react'
import Container from './Container'
import { useStartUpStore } from '../store/useStartUpStore'
import usePostsStore from '@/store/usePostsStore';
import StartUpCard from './StartUpCard';

const StartUpContainer = () => {

  const { startUp } = useStartUpStore();

  const {posts} = usePostsStore();

  return (
    <div className='pt-7'>
        <Container>
            <h1 className='text-3xl font-bold'>{startUp ? startUp : "All Startups"}</h1>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {posts.map((post) => <StartUpCard key={post.id} post={post}/>)} 
            </div>
        </Container>
    </div>
  )
}

export default StartUpContainer