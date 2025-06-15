import { create } from "zustand";

const usePostsStore = create(() => ({
    posts: [{
        id : 1,
        title: "test",
        description : "this is a description...",
        image : "https://images.unsplash.com/photo-1715514918422-3bde21134880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category : "Robots",
        author : {
            id : 1,
            name : "John Doe",
            image : "",},
        views : 100,
        createdAt : new Date(),
    }],

}))

export default usePostsStore;