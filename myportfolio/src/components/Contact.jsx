import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const dataToSend = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

 try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert(data.error || "Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};


  return (
    <section id="contact" className="py-20 bg-white/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Left Section */}
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
                href="mailto:vermaavani92@gmail.com"
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

          {/* Social Icons */}
          
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
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
                name="subject"
                placeholder="What's this about?"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project or just say hello!"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
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
