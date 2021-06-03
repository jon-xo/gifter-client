import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const [ searchPost, setSearchPost ] = useState("");

    const getAllPosts = () => {
        return fetch("https://localhost:5001/api/post/GetWithComments")
        .then((res) => res.json())
        .then(setPosts);
    };
    
    const getPost = (id) => {
        return fetch(`https://localhost:5001/api/post/GetWithComments/${id}`)
        .then((r) => r.json());
    };

    const addPost = (post) => {
        return fetch("https://localhost:5001/api/post/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    const findPost = (q) => {
        return fetch(`https://localhost:5001/api/post/search?q=${q}&sortDesc=true`)
        .then((r) => r.json())
        .then(setPosts);
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPost, setSearchPost, findPost, getPost }}>
            {props.children}
        </PostContext.Provider>
    );
};