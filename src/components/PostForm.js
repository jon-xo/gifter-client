import React, { useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider"
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useHistory } from "react-router-dom";

const PostForm = () => {
    const { addPost } = useContext(PostContext);

    const [ visible, setVisible ] = useState(false);
    const onDismiss = () => setVisible(false);

    const [ newPost, setNewPost ] = useState({
        title: "",
        imageUrl: "",
        dateCreated: new Date().toISOString(),
        userProfileId: 1
    });

    const history = useHistory();
    
    const handleFormChange = (event) => {
        const recentPost = { ...newPost }
        recentPost[event.target.id] = event.target.value
        setNewPost(recentPost)
    };

    const handleClickSavePost = (event) => {
        event.preventDefault()

        if (newPost.title === "" || newPost.imageUrl === "") {
            setVisible(true);
        } else {
            addPost(newPost).then((p) => {
                history.push("/");
            });
        }

    };

    return (
        <>
            <div>
                <Alert color="warning" isOpen={visible} toggle={onDismiss}>
                    <h4>Incomplete form</h4>
                    <p>Please complete all fields.</p>
                </Alert>
            </div>
            <div className="container my-4">
                <Form>
                    <FormGroup row>
                        <Label for="title">Title</Label>
                        <Input type="text" id="title" onChange={handleFormChange} placeholder="Post title..." />
                        <Label for="imageUrl">Image URL</Label>
                        <Input type="text" id="imageUrl" name="imageUrl" onChange={handleFormChange} placeholder=".gif, .png, .jpeg" />
                        <Label for="caption">Caption</Label>
                        <Input type="textarea" id="caption" onChange={handleFormChange} placeholder="Post descrition..." />
                    </FormGroup>
                    <FormGroup row>
                        <Button className="my-2" color="success"
                        onClick={handleClickSavePost}>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </>
    );
};

export default PostForm;