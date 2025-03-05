import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Option {
  id: string;
  text: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  onAnswer: (optionId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{question}</h3>
      
      <div className="space-y-3 mb-6">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
              selectedOption === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
            onClick={() => handleOptionSelect(option.id)}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedOption === option.id ? 'border-primary-500' : 'border-gray-300'
                }`}
              >
                {selectedOption === option.id && (
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                )}
              </div>
              <span className="text-gray-700">{option.text}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          selectedOption
            ? 'bg-primary-600 text-white hover:bg-primary-700'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next Question
      </button>
    </motion.div>
  );
};

export default QuestionCard;