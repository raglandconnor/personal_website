import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-5xl pl-32 font-semibold flex flex-col gap-4">
      404 Not found
      <Link className="underline" to="/">
        Go to home
      </Link>
    </div>
  );
}

export default NotFound;
