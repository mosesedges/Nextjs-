import React from "react";
import Link from "next/link";

const comments = () => {
  return (
    <div>
      <h1>The comments come here: so please leave a comment</h1>
      <Link href="/blog">
        <a>back</a>
      </Link>
    </div>
  );
};

export default comments;
