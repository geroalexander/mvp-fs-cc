import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogPost } from "./types/types";

export const Post: React.FC<BlogPost> = (post) => {
  return (
    <div className="w-60 p-8 rounded-md border-blue border-2 my-4 flex flex-col items-center">
      <h2 className="font-bold">{post.title}</h2>
      <p className="m-2 italic">{post.body}</p>
      <p className="italic">{new Date(post.timestamp).toLocaleString()}</p>
    </div>
  );
};

export const BlogItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = React.useState<BlogPost | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts/${id}`);
        const post = await response.json();
        setPost(post);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="flex justify-center items-center flex-col">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <Post {...post} />
      <button onClick={() => navigate("/")}>Back to Blog List</button>
    </div>
  );
};
