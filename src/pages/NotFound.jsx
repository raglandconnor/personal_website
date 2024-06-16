import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mt-32 text-5xl pl-32 font-semibold flex flex-col gap-4">
      404 not found
      <Link className="underline" to="/">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
