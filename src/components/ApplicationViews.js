import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostSearch from "./PostSearch";
import PostDetails from "./PostDetails";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PostSearch />
                <PostList />
            </Route>
    
            <Route path="/posts/add">
                <PostForm />
            </Route>
  
            <Route path="/posts/:id">
                <PostDetails />
            </Route>
        </Switch>
    );
  };
  
  export default ApplicationViews;