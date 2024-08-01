import React from 'react';
import ReactPlayer from 'react-player/youtube';

function CrashGuardFullDesc() {
  return (
    <div>
      <section>
        <p className="mb-4 md:mx-24">
          This project was created as a final project for COP3530, Data
          Structures and Algorithms, during Spring 2024 at UF.
        </p>
        <p className="mb-4 md:mx-24">
          Created alongside my friends, {''}
          <a
            href="https://www.linkedin.com/in/lcabrera3/"
            target="_blank"
            className="underline hover:opacity-75"
          >
            Luis Cabrera
          </a>
          {''} and {''}
          <a
            href="https://www.linkedin.com/in/divij-g-38a188218/"
            target="_blank"
            className="underline hover:opacity-75"
          >
            Divij Goyal
          </a>
          .
        </p>
        <p className="mb-4 md:mx-24">
          I was in charge of the hash map implementation. Collisions were
          handled using separate chaining.
        </p>
      </section>

      <section>
        <div>
          <div className="md:hidden grid lg:mx-24 gap-12 items-center justify-center lg:my-12">
            <ReactPlayer
              url="https://youtu.be/E8t5Uz8HIlE?si=WUVoruPFfvjgzcVm"
              width="100%"
              height="100%"
              controls={true}
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    fs: 1,
                    playsinline: 1,
                    origin: window.location.origin,
                    quality: 'highest',
                  },
                },
              }}
            />
          </div>
          <div className="hidden md:grid lg:mx-24 gap-12 items-center justify-center lg:my-12">
            <ReactPlayer
              url="https://youtu.be/E8t5Uz8HIlE?si=WUVoruPFfvjgzcVm"
              controls={true}
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    fs: 1,
                    playsinline: 1,
                    origin: window.location.origin,
                    quality: 'highest',
                  },
                },
              }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="py-12 grid items-center justify-center sm:px-24 md:px-48 lg:px-64 xl:px-72">
          <a
            href="https://drive.google.com/file/d/1D6bEjlnPTLO0aULwlZJOSo67gKgW0Rw_/view?usp=sharing"
            target="_blank"
            className="hover:opacity-85"
          >
            <img
              src="/project-screenshots/crash-guard/crashguard-report-screenshot.png"
              alt="Crashguard Report Front Page Screenshot"
            />
          </a>
          <p className="md:hidden text-center text-sm">Tap image</p>
        </div>
      </section>

      <section className="text-center mt-24">
        <h3 className="mb-4">Access the repository for more details</h3>
        <a
          href="https://github.com/raglandconnor/CrashGuard"
          target="_blank"
          className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}

export default CrashGuardFullDesc;
