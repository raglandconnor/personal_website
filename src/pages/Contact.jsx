import React from "react";

function Contact() {
  return (
    <main className="mt-32">
      <h1 className="text-center mb-16">Contact</h1>
      <section className="text-xl mx-4 pb-24">
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
      </section>
    </main>
  );
}

export default Contact;
