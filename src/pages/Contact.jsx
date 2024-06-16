import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="mb-16">Contact</h1>
      <div className="text-xl">
        <p>
          Email:{" "}
          <a
            href="mailto:connor.ragland@hotmail.com"
            className="hover:text-blue-500"
          >
            connor.ragland@hotmail.com
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/raglandconnor/"
            className="underline hover:text-blue-500"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
