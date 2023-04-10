import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BlogPost } from "./types/types";

export const BlogList: React.FC = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    axios.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <p>{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      ))}
      <Link to="/posts/new">Create a new post</Link>
    </div>
  );
};
