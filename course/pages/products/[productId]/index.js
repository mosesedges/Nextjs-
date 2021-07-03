import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const product = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h2>Details About Product {productId}</h2>
      <Link href="/products">
        <a>Back</a>
      </Link>
      <button>PLACE OTHER</button>
    </div>
  );
};

export default product;
