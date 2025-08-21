import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Left Section - Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let’s Connect</h2>
          <p className="text-gray-700 mb-8">
            I'm currently available for freelance work and full-time
            opportunities. Feel free to reach out if you'd like to collaborate
            or just say hello 👋
          </p>

          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <a
                href="mailto:yourmail@gmail.com"
                className="text-gray-800 hover:text-blue-600"
              >
                vermaavani92@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-green-600 w-6 h-6" />
              <span className="text-gray-800">+91 9555764806</span>
            </li>
            <li className="flex items-center space-x-4">
              <MapPin className="text-purple-600 w-6 h-6" />
              <span className="text-gray-800">Gorakhpur, India</span>
            </li>
            
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project or just say hello!"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
