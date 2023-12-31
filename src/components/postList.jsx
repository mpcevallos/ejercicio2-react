/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPosts } from "/services/posts-service.js";
import Post from "./post";

function PostList({ post, search, profile, showProfile, createdAt, author, comments }) {
  const [posts, setPosts] = useState(null);

  console.log(
    "Renderizando posts, en este momento se muestra el loading antes del mounting!"
  );

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  if (!posts) {
    return (
      <div className="p-5 text-center">
        <div className="spinner-border text-primary" role="status" />
        <h4 className="text-center text-secondary">Loading...</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-body-secondary me-4 pt-4 pb-5">
      <div className="row d-flex m-2">
        {posts
            .filter((post) => 
              (post.createdAt?.toLowerCase().includes(search.toLowerCase()) ||
              post.autor?.toLowerCase().includes(search.toLowerCase()) ||
              post.text?.toLowerCase().includes(search.toLowerCase()) ||
              post.comments?.toLowerCase().includes(search.toLowerCase()))
            )
            .map((post, i) => (
            <Post
              key={i}
              createdAt={post.createdAt}
              autor={post.autor}
              text={post.text}
              comments={post.comments}
              image={post.image}
            />
          ))}
      </div>
    </div>
  );
}

export default PostList;
