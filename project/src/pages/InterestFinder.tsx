import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ChevronRight, CheckCircle } from 'lucide-react';
import QuestionCard from '../components/QuestionCard';

const InterestFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [interests, setInterests] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Mock questions for the interest finder
  const questions = [
    {
      id: 'q1',
      text: 'Which of these activities would you enjoy doing in your free time?',
      options: [
        { id: 'q1a', text: 'Solving puzzles or brain teasers' },
        { id: 'q1b', text: 'Creating art or crafting something' },
        { id: 'q1c', text: 'Helping others with their problems' },
        { id: 'q1d', text: 'Organizing and planning events' },
      ],
    },
    {
      id: 'q2',
      text: 'What type of books or articles do you prefer reading?',
      options: [
        { id: 'q2a', text: 'Science and technology' },
        { id: 'q2b', text: 'Fiction and creative writing' },
        { id: 'q2c', text: 'Self-help and psychology' },
        { id: 'q2d', text: 'Business and leadership' },
      ],
    },
    {
      id: 'q3',
      text: 'In a group project, which role do you naturally take?',
      options: [
        { id: 'q3a', text: 'The problem solver who figures out challenges' },
        { id: 'q3b', text: 'The creative one who comes up with ideas' },
        { id: 'q3c', text: 'The mediator who ensures everyone works well together' },
        { id: 'q3d', text: 'The organizer who keeps the project on track' },
      ],
    },
    {
      id: 'q4',
      text: 'Which of these work environments appeals to you most?',
      options: [
        { id: 'q4a', text: 'A quiet, focused environment where I can solve complex problems' },
        { id: 'q4b', text: 'A creative, flexible space where I can express myself' },
        { id: 'q4c', text: 'A collaborative environment where I interact with different people' },
        { id: 'q4d', text: 'A structured environment with clear goals and processes' },
      ],
    },
    {
      id: 'q5',
      text: 'What would you most like to be recognized for in your career?',
      options: [
        { id: 'q5a', text: 'My innovative ideas and solutions' },
        { id: 'q5b', text: 'My creativity and unique perspective' },
        { id: 'q5c', text: 'My ability to help and support others' },
        { id: 'q5d', text: 'My leadership and organizational skills' },
      ],
    },
  ];

  // Interest categories based on answer patterns
  const interestCategories = {
    analytical: ['Technology', 'Data Science', 'Engineering', 'Research', 'Mathematics'],
    creative: ['Design', 'Arts', 'Writing', 'Media Production', 'Architecture'],
    social: ['Healthcare', 'Education', 'Counseling', 'Social Work', 'Human Resources'],
    organizational: ['Business Management', 'Finance', 'Project Management', 'Operations', 'Administration'],
  };

  const handleAnswer = (optionId: string) => {
    const questionId = questions[currentStep].id;
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Analyze answers and determine interests
      analyzeInterests();
      setIsCompleted(true);
    }
  };

  const analyzeInterests = () => {
    // Simple algorithm to determine interests based on answer patterns
    let analyticalCount = 0;
    let creativeCount = 0;
    let socialCount = 0;
    let organizationalCount = 0;

    Object.values(answers).forEach((answer) => {
      if (answer.endsWith('a')) analyticalCount++;
      if (answer.endsWith('b')) creativeCount++;
      if (answer.endsWith('c')) socialCount++;
      if (answer.endsWith('d')) organizationalCount++;
    });

    const result = [];
    
    if (analyticalCount >= 2) {
      result.push(...interestCategories.analytical.slice(0, analyticalCount));
    }
    
    if (creativeCount >= 2) {
      result.push(...interestCategories.creative.slice(0, creativeCount));
    }
    
    if (socialCount >= 2) {
      result.push(...interestCategories.social.slice(0, socialCount));
    }
    
    if (organizationalCount >= 2) {
      result.push(...interestCategories.organizational.slice(0, organizationalCount));
    }

    setInterests(result);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setInterests([]);
    setIsCompleted(false);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Find Your Interest</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover career fields that align with your natural interests and strengths
        </p>
      </div>

      {!isCompleted ? (
        <>
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-primary-600">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <QuestionCard
            question={questions[currentStep].text}
            options={questions[currentStep].options}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Your Interest Areas
            </h2>
            
            <div className="space-y-4 mb-8">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center p-3 bg-primary-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-gray-800 font-medium">{interest}</span>
                </div>
              ))}
            </div>
            
            <div className="text-gray-600 mb-8">
              <p className="mb-4">
                Based on your responses, these interest areas align well with your preferences and natural inclinations. 
                Consider exploring careers in these fields to find fulfilling work that matches your strengths.
              </p>
              <p>
                Take the Career Suitability Test for more specific career recommendations based on these interests.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetQuiz}
                className="flex-1 py-2 px-4 border border-primary-600 rounded-lg text-primary-600 font-medium hover:bg-primary-50 transition-colors"
              >
                Retake Quiz
              </button>
              <a
                href="/career-test"
                className="flex-1 py-2 px-4 bg-primary-600 rounded-lg text-white font-medium hover:bg-primary-700 transition-colors text-center"
              >
                Take Career Test
                <ChevronRight className="inline-block ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Information Section */}
      {!isCompleted && (
        <div className="max-w-3xl mx-auto mt-12 bg-primary-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Finding Your Interests Matters</h3>
          <p className="text-gray-700 mb-4">
            Research shows that people who work in fields aligned with their natural interests report higher job satisfaction, 
            better performance, and greater career longevity. Understanding your interests is the first step toward finding 
            meaningful work that energizes rather than drains you.
          </p>
          <p className="text-gray-700">
            This assessment helps identify your interest patterns across analytical, creative, social, and organizational domains, 
            providing a foundation for exploring compatible career paths.
          </p>
        </div>
      )}
    </div>
  );
};

export default InterestFinder;