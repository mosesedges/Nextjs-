import React from "react";
import Link from "next/link";

const articles = () => {
  return (
    <div>
      <h1>Articles About this blog can be found here!</h1>
      <Link href="/blog/comments">
        <a>
          <button>Back to comments</button>
        </a>
      </Link>
    </div>
  );
};

export default articles;
