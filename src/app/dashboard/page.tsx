import React from "react";
import Box from "@mui/material/Box";
import Gela from "@/part/test";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"dashboard/products"}>products</Link>
    </div>
  );
}
