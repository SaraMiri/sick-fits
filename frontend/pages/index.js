import React from "react";
import Link from "next/link";

const Home = props => (
  <div>
    <h1>Index</h1>
    <Link href="/sell">
      <a>Go to sell page</a>
    </Link>
  </div>
);

export default Home;
