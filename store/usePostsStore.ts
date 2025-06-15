import { create } from "zustand";

type Post = {
  id: string | number;
  title?: string;
  description?: string;
};

type PostsStore = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;        // replaces entire posts array
  setPost: (post: Post) => void;             // adds or updates a single post
};

const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  setPost: (post) =>
    set((state) => {
      const exists = state.posts.find((p) => p.id === post.id);
      if (exists) {
        return {
          posts: state.posts.map((p) => (p.id === post.id ? post : p)),
        };
      } else {
        return { posts: [...state.posts, post] };
      }
    }),
}));

export default usePostsStore;
