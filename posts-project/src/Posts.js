import React from "react";

function Posts({ post, image }) {
  return (
    <div>
      <img src={image} alt="" />
      <br />
      <br />
      <div>{post}</div>
      <br />
      <br />
    </div>
  );
}

export default Posts;
