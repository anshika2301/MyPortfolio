import React from "react";

const projects = [
  {
    title: "Typing Speed Race",
    description:
      "A modern cultural fest website built with React, Node.js, Express, and MongoDB. Features include user authentication, event registration, and secure payment processing.",
    image: "game.png", // put this in public/images/
    tech: ["React", "Tailwind", "JavaScript", "HTML"],
    demoLink: "https://speedtypingracer.netlify.app/",
    codeLink: "https://github.com/anshika2301/Game-Typingrace",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather application that provides accurate forecasts, interactive maps, and detailed analytics for multiple locations.",
    image: "weather-app.png",
    tech: ["React", "Tailwind", "JavaScript", "HTML"],
    demoLink: "https://anshikaweatherapp.netlify.app/",
    codeLink: "https://github.com/anshika2301/weatherapp",
  },
  {
    title: " AI-Image Generator",
    description:
      "A real-time weather application that provides accurate forecasts, interactive maps, and detailed analytics for multiple locations.",
    image: "image-generator.png",
    tech: ["React", "Tailwind", "JavaScript", "HTML"],
    demoLink: "https://imagegeneratorbyanshika.netlify.app/",
    codeLink: "https://github.com/anshika2301/AI-ImageGenerator",
  },
  // add more projects here as needed...
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">My Work</h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Here are some of my recent projects that showcase my skills and passion
          for creating amazing digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Top: image (thumbnail) */}
              <div className="w-full h-56 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
