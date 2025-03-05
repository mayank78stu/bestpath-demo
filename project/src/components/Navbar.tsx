import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaRegLightbulb, FaAward, FaCompass, FaMap, FaBookOpen, FaChartBar } from 'lucide-react';
import { FaBars, FaTimes, FaRegLightbulb, FaAward, FaCompass, FaMap, FaBookOpen, FaChartBar } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FaCompass className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">best<span className="text-primary-600">PATH</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/scholarships" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Scholarships
            </Link>
            <Link to="/interest-finder" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Find Your Interest
            </Link>
            <Link to="/career-test" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Career Test
            </Link>
            <Link to="/roadmap" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Roadmap
            </Link>
            <Link to="/soft-skills" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Soft Skills
            </Link>
            <Link to="/dashboard" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors">
              Dashboard
            </Link>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/scholarships" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <FaAward className="mr-2 h-5 w-5" />
              Scholarships
            </Link>
            <Link 
              to="/interest-finder" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <FaRegLightbulb className="mr-2 h-5 w-5" />
              Find Your Interest
            </Link>
            <Link 
              to="/career-test" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <Compass className="mr-2 h-5 w-5" />
              Career Test
            </Link>
            <Link 
              to="/roadmap" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <FaMap className="mr-2 h-5 w-5" />
              Roadmap
            </Link>
            <Link 
              to="/soft-skills" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <FaBookOpen className="mr-2 h-5 w-5" />
              Soft Skills
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              <FaChartBar className="mr-2 h-5 w-5" />
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;