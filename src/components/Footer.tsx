import React from 'react';
import { Heart, Mail, Building2, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">Musunuri Pavani</h4>
            <p className="text-gray-300 mb-4">
              Assistant Professor | CSE (AI & ML)
            </p>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to fostering academic excellence and contributing to the advancement 
              of Artificial Intelligence and Machine Learning education.
            </p>
          </div>
          
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact Information</h5>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:pavani1416@sasi.ac.in" className="hover:text-blue-400 transition-colors">
                  pavani1416@sasi.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>Sasi Institute of Technology and Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Tadepalligudem</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for academic excellence
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Musunuri Pavani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;