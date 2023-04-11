import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "./types/types";
import { Post } from "./BlogItem";

export const BlogList: React.FC = () => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const showPosts = React.useCallback(() => {
    if (posts.length === 0) {
      return (
        <div className="flex justify-center items-center flex-cols">
          <p>No posts yet!</p>
        </div>
      );
    }
    return (
      <div className="flex justify-center items-center flex-col">
        {posts.map((post) => (
          <div key={post.id} className="justify-center">
            <Link to={`/posts/${post.id}`}>
              <Post {...post} />
            </Link>
          </div>
        ))}
      </div>
    );
  }, [posts]);

  return (
    <div className="m-8 space-y-4">
      <h1 className="flex justify-center font-bold text-2xl">My Blog Posts</h1>
      {showPosts()}
      <Link className="flex justify-center" to="/posts/new">
        Create a new post
      </Link>
    </div>
  );
};
