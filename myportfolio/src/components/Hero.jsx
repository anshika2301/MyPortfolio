import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-20 text-center"
    >
      {/* Profile Image */}
      <img
        src="pic.jpg" // ✅ replace with actual image
        alt="Avani Verma - Software Engineer"
        className="w-46 h-46 md:w-59 md:h-59 p-1 hover:scale-105 hover:rotate-5 hover:grayscale-0 grayscale hover:shadow-2xl transition duration-600 bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-300 rounded-full shadow-lg mb-6 object-cover"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-extrabold  hover:scale-105 drop-shadow-md leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-300 to-purple-400">
        Anshika Verma
      </h1>

      {/* Subtitle */}
      <h2 className="text-lg md:text-xl text-slate-600 mt-2">
        Full-Stack Developer & Software Engineer
      </h2>

      {/* Short Description */}
      <p className="text-base md:text-lg text-slate-500 mt-4 max-w-2xl">
        I craft beautiful, functional web experiences that bring ideas to life.
        Passionate about clean code, intuitive design, and solving complex
        problems with elegant solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
        {/* Hire Me */}
        <a
          href="mailto:avani.verma@example.com" // ✅ replace with your email
          aria-label="Send an email to Avani Verma"
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-md hover:bg-brand-700 transition flex items-center gap-2"
        >
          ✉️ Hire Me
        </a>

        {/* Download Resume */}
        <a
          href="resume.pdf" // ✅ place resume in public folder
          download
          aria-label="Download Anshika Verma's resume"
          className="px-6 py-3 rounded-lg border bg-blue-100 border-blue-400 text-brand-600 font-medium hover:bg-brand-50 transition flex items-center gap-2"
        >
          ⬇️ Download Resume
        </a>
      </div>

      {/* View My Work */}
      <div className="mt-10">
        <a
          href="#projects"
          className="text-slate-700 font-bold hover:text-brand-600 transition text-m md:text-base"
        >
          View My Work ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;
