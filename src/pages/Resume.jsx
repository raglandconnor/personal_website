import React from "react";

function Resume() {
  return (
    <main id="resume" className="mt-32 h-screen xl:w-[1280px]">
      <h1 className="mb-16 text-center xl:text-left xl:pl-12 pb-8 border-b border-white border-opacity-50">
        Resume
      </h1>
      <section className="px-12">
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
