import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProfileSection />
      <EducationSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;