import React from "react";

function Resume() {
  return (
    <main id="resume" className="h-screen">
      <h1 className="mb-16 mt-32 text-center">Resume</h1>
      <section className="">
        <a
          href="https://drive.google.com/file/d/1YcdJlgcou1L4XyIiFJ7GFz63tL7_nGCb/view?usp=sharing"
          target="_blank"
        >
          <img
            src="/resume/raglandconnor_resume.png"
            alt="Connor Ragland Resume"
            className="px-4"
          />
        </a>
      </section>
    </main>
  );
}

export default Resume;
