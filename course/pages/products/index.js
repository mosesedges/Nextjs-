import React from "react";
import Link from "next/link";

function productList() {
  return (
    <div>
      <Link href="/products/1">
        <a>
          <h2>Product 1</h2>
        </a>
      </Link>
      <Link href="/products/2">
        <a>
          <h2>Product 2</h2>
        </a>
      </Link>
      <Link href="/products/tankers">
        <a>
          <h2>Product 3</h2>
        </a>
      </Link>
    </div>
  );
}

export default productList;
