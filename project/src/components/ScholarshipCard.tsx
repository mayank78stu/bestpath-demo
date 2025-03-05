import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, DollarSign, GraduationCap } from 'lucide-react';

interface ScholarshipCardProps {
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  link: string;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  title,
  provider,
  amount,
  deadline,
  eligibility,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <Award className="h-6 w-6 text-primary-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{provider}</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-sm text-gray-700">Amount: {amount}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-sm text-gray-700">Deadline: {deadline}</span>
          </div>
          
          <div className="flex items-center">
            <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
            <span className="text-sm text-gray-700">Eligibility: {eligibility}</span>
          </div>
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors"
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
};

export default ScholarshipCard;