import React from 'react';
import { Mail, MapPin, Building2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Musunuri Pavani
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 opacity-90">
            Assistant Professor
          </h2>
          <p className="text-lg md:text-xl font-medium mb-6 opacity-95">
            CSE (Artificial Intelligence and Machine Learning)
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <Mail className="w-5 h-5" />
              <a href="mailto:pavani1416@sasi.ac.in" className="hover:underline">
                pavani1416@sasi.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Sasi Institute of Technology and Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Tadepalligudem</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;