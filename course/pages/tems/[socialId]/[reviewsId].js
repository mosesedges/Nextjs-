import React from "react";
import { useRouter } from "next/router";

function reviews() {
  const router = useRouter();
  const { socialId, reviewsId } = router.query;
  return (
    <div>
      <h1>
        the route for {socialId} {reviewsId}
      </h1>
    </div>
  );
}

export default reviews;
