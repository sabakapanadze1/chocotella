"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

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
      <Box>
        <h1 style={{ fontSize: "24px", color: "white" }}>Next.js</h1>
      </Box>
      <Box>
        <Typography variant="h1">lala lend</Typography>
      </Box>
    </Box>
  );
}
