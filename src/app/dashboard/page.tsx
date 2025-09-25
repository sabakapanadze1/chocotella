import React from "react";
import Box from "@mui/material/Box";
import Gela from "@/part/test";
import Link from "next/link";

export default async function Products() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Fail Fetch");
  const albums = await response.json();
  console.log(albums, "alaklkalk");

  return (
    <div>
      <Link href={"dashboard/products"}>products</Link>
      ssll
      {albums.map((album: { id: number; name: string }) => {
        return (
          <div className="flex justify-between" key={album.id}>
            <h3 className="color-black">Album name:{album.name}</h3>
            <p>albom id:{album.id}</p>
          </div>
        );
      })}
      <h3>alboms</h3>
    </div>
  );
}
