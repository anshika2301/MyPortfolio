// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-gradient">
            Anshika Verma
          </h2>
          <p className="mt-3 text-sm">
            Full-Stack Developer passionate about creating beautiful,
            functional web experiences that make a difference.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/avika2310" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anshika-verma-137165257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/_anshikaverma23?igsh=d2Y1aDQyc3MzdzFo" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Made with ❤️ by Anshika Verma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
