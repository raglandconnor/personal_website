import React from "react";

function Resume() {
    return (
        <main id="resume" className="mt-32 h-screen xl:w-[1280px]">
            {/* <h1 className="mb-16 text-center xl:text-left xl:pl-12 pb-8 border-b border-white border-opacity-50">
                Resume
            </h1> */}
            <section className="px-0 md:px-12">
                <a
                    href="https://drive.google.com/file/d/1EHQ9vCkAAasGDQEp7M_J65x2g0fLnpDG/view?usp=sharing"
                    target="_blank"
                >
                    <img
                        src="/resume/raglandconnor_resume.png"
                        alt="Connor Ragland Resume"
                        className="px-4"
                        draggable="false"
                    />
                </a>
            </section>
        </main>
    );
}

export default Resume;
