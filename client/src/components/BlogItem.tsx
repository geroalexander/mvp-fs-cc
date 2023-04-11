import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "./types/types";

export const BlogItem: React.FC<BlogPost> = (props: BlogPost) => {
  const { id, title, body, timestamp } = props;

  return (
    <>
      <div key={id}>
        <Link to={`/posts/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{body}</p>
        <p>{new Date(timestamp).toLocaleString()}</p>
      </div>
    </>
  );
};
