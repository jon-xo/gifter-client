import React, { useContext } from "react";
import { PostContext } from "../providers/PostProvider";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const PostSearch = () => {
    const { setSearchPost } = useContext(PostContext);

    return (
        <>
            <div className="container">
                <InputGroup className="my-4">
                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                    <Input type="text"
                        className=""
                        onKeyUp={(event) => setSearchPost(event.target.value)}
                        placeholder="Find a post..."
                    />
                </InputGroup>
            </div>
        </>
    );
};

export default PostSearch;