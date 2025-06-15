import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "M.Tech",
      institution: "Sasi Institute of Technology and Engineering",
      location: "Tadepalligudem",
      duration: "2022 - 2024",
      description: "Advanced studies in technology and engineering"
    },
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "BVRaju College",
      location: "Bhimavaram",
      duration: "2017 - 2020",
      description: "Comprehensive computer applications and programming"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Education</h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey has equipped me with comprehensive knowledge and expertise 
            in computer science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <h5 className="text-xl font-semibold text-blue-600 mb-3">{edu.institution}</h5>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;