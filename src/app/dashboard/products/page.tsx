import React from "react";
import Box from "@mui/material/Box";
import Gela from "@/part/test";
import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link href={"/dashboard/products/1"}>
        <h1>Product 1</h1>
      </Link>
      <Link href={"/dashboard/products/2"}>
        <h1>Product 2</h1>
      </Link>
      <Link href={"/dashboard/products/3"}>
        <h1>Product 3</h1>
      </Link>
      <Link href={"/dashboard/products/4"}>
        <h1>Product 4</h1>
      </Link>
    </div>
  );
}
