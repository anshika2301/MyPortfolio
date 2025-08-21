import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative z-10 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-600">
            I’m a developer focused on crafting UI that feels calm and clear. Inspired by minimalist learning sites,
            my work emphasizes strong layout, readable type, and smooth motion.
          </p>
          <p className="mt-4 text-slate-600">
            I enjoy React, Vite, Tailwind, and a11y-first design.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200/50 to-transparent blur-2xl rounded-2xl" aria-hidden></div>
            <img className="relative rounded-2xl shadow-lg w-full h-auto object-cover 
            [mask-image:radial-gradient(circle,white,transparent)]"
                 src="bg2.jpg"
                 alt="Working at a laptop" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
