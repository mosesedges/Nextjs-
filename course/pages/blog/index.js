import React from "react";
import Link from "next/link";

const app = () => {
  return (
    <div>
      <Link href="blog/comments">
        <a>Comments</a>
      </Link>

      <h1>Blog home page </h1>
      <Link href="/blog/articles">
        <a>Articles</a>
      </Link>
    </div>
  );
};

export default app;
