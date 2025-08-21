import React, { useRef, useState } from "react";

const Navbar = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggleAudio = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-bold text-brand-700 text-lg">
          Portfolio
        </a>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand-700" href="#about">
            About
          </a>
          <a className="hover:text-brand-700" href="#projects">
            Projects
          </a>
          <a className="hover:text-brand-700" href="#contact">
            Contact
          </a>
          <button
            onClick={toggleAudio}
            className="ml-2 px-4 py-1.5 rounded-full border border-brand-300 bg-green-50 hover:bg-brand-50 text-black"
            aria-pressed={playing}
            title="Toggle ambient sound"
          >
            {playing ? "🔊" : "🔈"}
          </button>
          <audio ref={audioRef} src="backgroundmusic.mp3" loop preload="none" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
