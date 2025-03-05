import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">best<span className="text-primary-600">PATH</span></span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Guiding you to your perfect career path with AI-powered insights and personalized recommendations.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/scholarships" className="text-sm text-gray-600 hover:text-primary-600">
                  Scholarship Finder
                </Link>
              </li>
              <li>
                <Link to="/interest-finder" className="text-sm text-gray-600 hover:text-primary-600">
                  Find Your Interest
                </Link>
              </li>
              <li>
                <Link to="/career-test" className="text-sm text-gray-600 hover:text-primary-600">
                  Career Suitability Test
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-sm text-gray-600 hover:text-primary-600">
                  Personalized Roadmap
                </Link>
              </li>
              <li>
                <Link to="/soft-skills" className="text-sm text-gray-600 hover:text-primary-600">
                  Soft Skill Enhancement
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                <span className="text-sm text-gray-600">
                  123 Innovation Street, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm text-gray-600">info@bestpath.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} bestPATH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;