import React from "react";

function Resume() {
  return (
    <div>
      <h1 className="mb-16">Resume</h1>
      <iframe
        src="/resume/raglandconnor_resume.pdf"
        className="h-screen w-full"
        style={{ border: "none" }}
      >
        Your browser does not support iframes.
      </iframe>
    </div>
  );
}

export default Resume;
