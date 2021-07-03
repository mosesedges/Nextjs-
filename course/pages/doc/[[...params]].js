//***  CREATE A  (CACHE ALL ROUTE) ***//

import React from "react";
import { useRouter } from "next/router"; //import useRouter from next/router

const home = () => {
  const router = useRouter();
  // call the hook and set it to a constant called router

  const { params = [] } = router.query;
  //destructure and query the params cache all route

  //display the return statement if the queried route length matches the given number, where there is no match display the last return statement.
  if (params.length === 3) {
    return <h1>Wedding pictures in pictures {params[2]}</h1>;
  } else if (params.length === 2) {
    return <h1>Pictures in categories {params[1]}</h1>;
  } else if (params.length === 1) {
    return <h1>categories in {params[0]}</h1>;
  }
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default home;
