import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogPost } from "./types/types";

export const Post: React.FC<BlogPost> = (post) => {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{new Date(post.timestamp).toLocaleString()}</p>
    </>
  );
};

export const BlogItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<BlogPost | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const post = await response.json();
        setPost(post);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Post {...post} />
      <button onClick={() => navigate("/")}>Back to Blog List</button>
    </div>
  );
};
