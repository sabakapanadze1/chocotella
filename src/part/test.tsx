"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Gela() {
  return (
    <Box
      height="auto"
      width="100%"
      bgcolor="red"
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <h1 className="text-3xl">
        <Link href={"/dashboard"}>Dashboard</Link>
      </h1>
    </Box>
  );
}
