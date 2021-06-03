import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts, searchPost, findPost } = useContext(PostContext);

    // const [ filteredPosts, setFilteredPosts ] = useState([]);

    // Use PostProvider to retreive all available posts from the API
    // Store returned posts in the posts array variable
    // useEffect(() => {
    //     getAllPosts();
    // }, []);

    useEffect(() => {
        if (searchPost !== "") {
            const finalQuery = searchPost.toLowerCase(); 
            findPost(finalQuery);
        } else {
            getAllPosts();
        }
    }, [searchPost])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;