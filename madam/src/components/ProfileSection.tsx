import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white">
              <img 
                src="https://res.cloudinary.com/dosqewmuo/image/upload/v1749923388/umymnm7hpzikb0qhtnuh.jpg" 
                alt="Musunuri Pavani - Assistant Professor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">About Me</h3>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg">
                I am currently serving as an Assistant Professor at Sasi Institute of Technology and Engineering, 
                dedicated to fostering academic excellence and student growth. With a strong commitment to both 
                teaching and institutional development, I previously contributed to the administrative section, 
                supporting key functions and operations that enhanced the academic environment.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                My dual experience in academics and administration enables me to bring a well-rounded perspective 
                to my role, ensuring a balance between educational quality and organizational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;