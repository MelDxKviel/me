import React from 'react';
import { Github, Linkedin, Send, Mail, FileText } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background container */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#0A0A1B] via-[#17172B] to-[#1E1E3F]">
        <div className="grid-background" />
        <div className="glow-effect absolute top-1/2 left-1/2" />
        <div className="wave" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* Main content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight backdrop-blur-sm">
            Igor Kartashev
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Python Backend Developer
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://www.linkedin.com/in/igor-kartashev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://github.com/MelDxKviel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://t.me/MelDxKviel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Telegram"
            >
              <Send className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://meldxkviel.github.io/cv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="CV"
            >
              <FileText className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => window.location.href = 'mailto:mega1hack52@gmail.com'}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 ease-in-out bg-indigo-600/80 backdrop-blur-sm rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
            <div className="absolute inset-0 rounded-full border-2 border-indigo-600/50 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;