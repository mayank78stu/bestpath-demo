import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Compass, Map, BookOpen, Users } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Scholarship Finder',
      description: 'Discover scholarships tailored to your profile and academic achievements.',
      link: '/scholarships',
    },
    {
      icon: Lightbulb,
      title: 'Find Your Interest',
      description: 'Explore your passions and discover careers that align with your interests.',
      link: '/interest-finder',
    },
    {
      icon: Compass,
      title: 'Career Suitability Test',
      description: 'Take our comprehensive assessment to find your ideal career match.',
      link: '/career-test',
    },
    {
      icon: Map,
      title: 'Personalized Roadmap',
      description: 'Get a customized step-by-step plan to achieve your career goals.',
      link: '/roadmap',
    },
    {
      icon: BookOpen,
      title: 'Soft Skill Enhancement',
      description: 'Develop essential soft skills that employers value in today\'s workplace.',
      link: '/soft-skills',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with mentors and peers who share your professional interests.',
      link: '#',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      content: 'bestPATH helped me discover my passion for UX design when I was unsure about my career direction. The personalized roadmap gave me clear steps to follow!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Recent Graduate',
      content: 'The career suitability test was spot on! It matched me with roles I hadn\'t considered but that perfectly fit my skills and personality. I\'m now working in a field I love.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Priya Patel',
      role: 'MBA Student',
      content: 'Thanks to bestPATH\'s scholarship finder, I secured funding for my graduate studies that I wouldn\'t have found otherwise. This platform is a game-changer!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              Find Your Perfect Career Path
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl mb-8"
            >
              AI-powered guidance to help you discover, plan, and achieve your dream career
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/career-test"
                className="px-8 py-3 rounded-lg bg-white text-primary-600 font-medium hover:bg-gray-100 transition-colors"
              >
                Take Career Test
              </Link>
              <Link
                to="/interest-finder"
                className="px-8 py-3 rounded-lg bg-primary-700 text-white font-medium hover:bg-primary-800 transition-colors"
              >
                Find Your Interest
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to guide you through every step of your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform analyzes your profile to provide personalized career guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Your Profile</h3>
              <p className="text-gray-600">
                Answer a few questions about your interests, skills, education, and preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your profile to identify suitable career paths and opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Personalized Guidance</h3>
              <p className="text-gray-600">
                Receive tailored recommendations, roadmaps, and resources to achieve your career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students and professionals who found their path with our guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards a fulfilling professional journey tailored to your unique profile.
          </p>
          <Link
            to="/career-test"
            className="px-8 py-3 rounded-lg bg-white text-primary-600 font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Journey Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;