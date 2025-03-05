import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, DollarSign, GraduationCap } from 'lucide-react';

interface CareerCardProps {
  title: string;
  description: string;
  growthRate: string;
  salary: string;
  education: string;
  matchPercentage: number;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  growthRate,
  salary,
  education,
  matchPercentage,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            {matchPercentage}% Match
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-sm text-gray-700">Growth Rate: {growthRate}</span>
          </div>
          
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-sm text-gray-700">Average Salary: {salary}</span>
          </div>
          
          <div className="flex items-center">
            <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-sm text-gray-700">Education: {education}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            View Roadmap
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCard;