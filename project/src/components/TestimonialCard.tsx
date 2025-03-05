import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden p-6"
    >
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </motion.div>
  );
};

export default TestimonialCard;