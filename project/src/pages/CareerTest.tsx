import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import QuestionCard from '../components/QuestionCard';
import CareerCard from '../components/CareerCard';

const CareerTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [careerMatches, setCareerMatches] = useState<any[]>([]);

  // Mock questions for the career suitability test
  const questions = [
    {
      id: 'q1',
      text: 'Which of these work environments do you prefer?',
      options: [
        { id: 'q1a', text: 'A structured office with clear procedures' },
        { id: 'q1b', text: 'A creative space with flexibility' },
        { id: 'q1c', text: 'A collaborative environment with teamwork' },
        { id: 'q1d', text: 'An independent setting where I can work autonomously' },
      ],
    },
    {
      id: 'q2',
      text: 'When faced with a problem, how do you typically approach it?',
      options: [
        { id: 'q2a', text: 'Analyze data and look for patterns' },
        { id: 'q2b', text: 'Think outside the box for creative solutions' },
        { id: 'q2c', text: 'Discuss with others to get different perspectives' },
        { id: 'q2d', text: 'Follow established procedures and best practices' },
      ],
    },
    {
      id: 'q3',
      text: 'Which of these skills do you feel most confident in?',
      options: [
        { id: 'q3a', text: 'Technical and analytical skills' },
        { id: 'q3b', text: 'Creative and artistic abilities' },
        { id: 'q3c', text: 'Communication and interpersonal skills' },
        { id: 'q3d', text: 'Organization and attention to detail' },
      ],
    },
    {
      id: 'q4',
      text: 'What type of impact do you want to make in your career?',
      options: [
        { id: 'q4a', text: 'Innovate and develop new technologies or solutions' },
        { id: 'q4b', text: 'Express ideas and inspire others through creativity' },
        { id: 'q4c', text: 'Help people and make a difference in their lives' },
        { id: 'q4d', text: 'Build efficient systems and processes' },
      ],
    },
    {
      id: 'q5',
      text: 'How do you prefer to make decisions?',
      options: [
        { id: 'q5a', text: 'Based on data and logical analysis' },
        { id: 'q5b', text: 'Following my intuition and what feels right' },
        { id: 'q5c', text: 'Considering how it affects people involved' },
        { id: 'q5d', text: 'Following established guidelines and protocols' },
      ],
    },
    {
      id: 'q6',
      text: 'Which of these values is most important to you in a career?',
      options: [
        { id: 'q6a', text: 'Innovation and intellectual challenge' },
        { id: 'q6b', text: 'Creativity and self-expression' },
        { id: 'q6c', text: 'Making a positive impact on others' },
        { id: 'q6d', text: 'Stability and clear advancement paths' },
      ],
    },
    {
      id: 'q7',
      text: 'How do you feel about taking risks in your career?',
      options: [
        { id: 'q7a', text: 'Comfortable with calculated risks based on data' },
        { id: 'q7b', text: 'Excited by new possibilities and opportunities' },
        { id: 'q7c', text: 'Prefer stability but open to change for growth' },
        { id: 'q7d', text: 'Prefer established paths with proven results' },
      ],
    },
  ];

  // Mock career data
  const careers = [
    {
      id: 1,
      title: 'Data Scientist',
      description: 'Analyze complex data sets to identify trends and insights that drive business decisions.',
      growthRate: '22% (Much faster than average)',
      salary: '$100,560 per year',
      education: 'Bachelor\'s or Master\'s degree',
      type: 'analytical',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      description: 'Create intuitive, engaging user experiences for websites, apps, and digital products.',
      growthRate: '13% (Faster than average)',
      salary: '$77,200 per year',
      education: 'Bachelor\'s degree or certificate',
      type: 'creative',
    },
    {
      id: 3,
      title: 'Clinical Psychologist',
      description: 'Help people overcome challenges and improve their mental health and wellbeing.',
      growthRate: '6% (As fast as average)',
      salary: '$82,180 per year',
      education: 'Doctoral degree',
      type: 'social',
    },
    {
      id: 4,
      title: 'Project Manager',
      description: 'Plan, execute, and oversee projects to ensure they are completed on time and within budget.',
      growthRate: '7% (As fast as average)',
      salary: '$94,500 per year',
      education: 'Bachelor\'s degree',
      type: 'organizational',
    },
    {
      id: 5,
      title: 'Software Engineer',
      description: 'Design and develop computer systems and applications to solve problems and meet user needs.',
      growthRate: '22% (Much faster than average)',
      salary: '$110,140 per year',
      education: 'Bachelor\'s degree',
      type: 'analytical',
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      description: 'Develop and implement marketing strategies to promote products, services, or brands.',
      growthRate: '10% (Faster than average)',
      salary: '$73,970 per year',
      education: 'Bachelor\'s degree',
      type: 'creative',
    },
  ];

  const handleAnswer = (optionId: string) => {
    const questionId = questions[currentStep].id;
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Analyze answers and determine career matches
      analyzeCareerMatches();
      setIsCompleted(true);
    }
  };

  const analyzeCareerMatches = () => {
    // Simple algorithm to determine career matches based on answer patterns
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

    const total = questions.length;
    const matches = careers.map((career) => {
      let matchPercentage = 0;
      
      if (career.type === 'analytical') {
        matchPercentage = Math.round((analyticalCount / total) * 100);
      } else if (career.type === 'creative') {
        matchPercentage = Math.round((creativeCount / total) * 100);
      } else if (career.type === 'social') {
        matchPercentage = Math.round((socialCount / total) * 100);
      } else if (career.type === 'organizational') {
        matchPercentage = Math.round((organizationalCount / total) * 100);
      }
      
      return {
        ...career,
        matchPercentage,
      };
    });

    // Sort by match percentage (highest first)
    const sortedMatches = matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
    setCareerMatches(sortedMatches);
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers({});
    setCareerMatches([]);
    setIsCompleted(false);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Career Suitability Test</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover career paths that match your skills, preferences, and personality
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
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <Compass className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Your Career Matches
              </h2>
              
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Based on your responses, we've identified these career paths that align with your preferences, 
                skills, and work style. Explore each option to learn more about the requirements and opportunities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {careerMatches.map((career) => (
              <CareerCard
                key={career.id}
                title={career.title}
                description={career.description}
                growthRate={career.growthRate}
                salary={career.salary}
                education={career.education}
                matchPercentage={career.matchPercentage}
              />
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetTest}
              className="py-2 px-6 border border-primary-600 rounded-lg text-primary-600 font-medium hover:bg-primary-50 transition-colors"
            >
              Retake Test
            </button>
            <a
              href="/roadmap"
              className="py-2 px-6 bg-primary-600 rounded-lg text-white font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              View Career Roadmaps
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Information Section */}
      {!isCompleted && (
        <div className="max-w-3xl mx-auto mt-12 bg-primary-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">About This Assessment</h3>
          <p className="text-gray-700 mb-4">
            This career suitability test evaluates your preferences, work style, and values to identify career paths 
            that align with your natural strengths and interests. The assessment considers factors such as:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Work environment preferences</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Problem-solving approach</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Skills and competencies</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Values and motivations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Decision-making style</span>
            </li>
          </ul>
          <p className="text-gray-700">
            After completing the assessment, you'll receive personalized career recommendations with detailed information 
            about each path, including growth potential, salary expectations, and educational requirements.
          </p>
        </div>
      )}
    </div>
  );
};

export default CareerTest;