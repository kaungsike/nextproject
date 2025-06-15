import { create } from "zustand";

export interface Post {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  _createdAt: string;
  views: number;
  author: {
    name: string;
    image?: string;
  };
}

interface PostsState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  setPost: (post: Post) => void;  // Add setPost to interface
}

const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  setPost: (post) =>
    set((state) => {
      const exists = state.posts.find((p) => p._id === post._id); // use _id consistently
      if (exists) {
        return {
          posts: state.posts.map((p) => (p._id === post._id ? post : p)),
        };
      } else {
        return { posts: [...state.posts, post] };
      }
    }),
}));

export default usePostsStore;
