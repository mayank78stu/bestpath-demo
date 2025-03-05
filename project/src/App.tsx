import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScholarshipFinder from './pages/ScholarshipFinder';
import InterestFinder from './pages/InterestFinder';
import CareerTest from './pages/CareerTest';
//import Roadmap from './pages/Roadmap';
import SoftSkills from './pages/SoftSkills';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scholarships" element={<ScholarshipFinder />} />
            <Route path="/interest-finder" element={<InterestFinder />} />
            <Route path="/career-test" element={<CareerTest />} />
            {/* <Route path="/roadmap" element={<Roadmap />} /> */}
            <Route path="/soft-skills" element={<SoftSkills />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;