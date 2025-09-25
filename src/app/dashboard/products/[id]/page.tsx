import React from "react";

import Link from "next/link";

export default function Products({ params }: { params: { id: string } }) {
  return <div>Here is Product {params.id}</div>;
}
