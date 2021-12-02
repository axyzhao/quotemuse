import React, { useEffect, useState } from "react";
import './Posts.css'; // Tell webpack that Button.js uses these styles
import Create from "./create";
import classnames from 'classnames';
import logo from './owl.png'
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const resp = await fetch(
      "https://serverless-api.axyzhao.workers.dev/api/posts"
    );
    const postsResp = await resp.json();

    setPosts(postsResp);
    return postsResp;
  };

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://serverless-api.axyzhao.workers.dev/api/posts"
      );
      const postsResp = await resp.json();

      setPosts(postsResp);
    };

    getPosts();
  }, []);

  const parsedPosts = posts.map((post) => JSON.parse(post))

  return (
    <div>
      <h1>QuoteMuse <img src={logo} alt="Logo" /></h1> 
      <h2>Share your favorite quotes.</h2>
      {parsedPosts.sort((a, b) => {return (a.id - b.id)}).map((post) => (
        <div className={classnames({quote: true})} key={post.id}>
          <h2>
            {`${post.id}: ${post.title}`}
          </h2>
          <p className="author">
            {`Posted by: ${post.username}`}
          </p>
          <p>
            {post.content}
          </p>
          <hr />
        </div>
      ))}
      <Create update={getPosts} />
    </div>
  );
};

export default Posts;
