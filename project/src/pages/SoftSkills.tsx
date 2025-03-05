import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, CheckCircle, Award, Clock, ArrowRight } from 'lucide-react';

const SoftSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState('communication');
  const [expandedModules, setExpandedModules] = useState<string[]>(['module1']);

  // Mock soft skills data
  const softSkills = [
    {
      id: 'communication',
      title: 'Communication',
      description: 'Effectively convey information and ideas to others in various formats.',
      icon: BookOpen,
    },
    {
      id: 'leadership',
      title: 'Leadership',
      description: 'Guide and motivate others to achieve common goals and objectives.',
      icon: Award,
    },
    {
      id: 'teamwork',
      title: 'Teamwork',
      description: 'Collaborate effectively with others to achieve shared objectives.',
      icon: CheckCircle,
    },
    {
      id: 'time-management',
      title: 'Time Management',
      description: 'Efficiently organize and prioritize tasks to maximize productivity.',
      icon: Clock,
    },
  ];

  // Mock course modules for Communication skill
  const communicationModules = [
    {
      id: 'module1',
      title: 'Fundamentals of Effective Communication',
      description: 'Learn the core principles of clear and impactful communication.',
      duration: '45 minutes',
      lessons: [
        {
          title: 'Understanding Communication Styles',
          description: 'Identify different communication styles and when to use each.',
          videoUrl: '#',
          resources: [
            { title: 'Communication Styles Assessment', link: '#' },
            { title: 'Adapting Your Style Guide', link: '#' },
          ],
        },
        {
          title: 'Active Listening Techniques',
          description: 'Master the art of fully engaging with others during conversations.',
          videoUrl: '#',
          resources: [
            { title: 'Active Listening Worksheet', link: '#' },
            { title: 'Practice Exercises', link: '#' },
          ],
        },
        {
          title: 'Nonverbal Communication',
          description: 'Understand how body language, facial expressions, and gestures impact your message.',
          videoUrl: '#',
          resources: [
            { title: 'Nonverbal Cues Cheat Sheet', link: '#' },
            { title: 'Self-Assessment Tool', link: '#' },
          ],
        },
      ],
    },
    {
      id: 'module2',
      title: 'Written Communication',
      description: 'Develop clear, concise, and effective written communication skills.',
      duration: '60 minutes',
      lessons: [
        {
          title: 'Email Etiquette and Best Practices',
          description: 'Learn how to write professional and effective emails.',
          videoUrl: '#',
          resources: [
            { title: 'Email Templates', link: '#' },
            { title: 'Common Email Mistakes', link: '#' },
          ],
        },
        {
          title: 'Business Writing Essentials',
          description: 'Master the fundamentals of clear and concise business writing.',
          videoUrl: '#',
          resources: [
            { title: 'Business Writing Guide', link: '#' },
            { title: 'Practice Exercises', link: '#' },
          ],
        },
      ],
    },
    {
      id: 'module3',
      title: 'Presentation Skills',
      description: 'Learn to deliver engaging and impactful presentations.',
      duration: '75 minutes',
      lessons: [
        {
          title: 'Structuring Effective Presentations',
          description: 'Learn how to organize your content for maximum impact.',
          videoUrl: '#',
          resources: [
            { title: 'Presentation Structure Template', link: '#' },
            { title: 'Content Planning Worksheet', link: '#' },
          ],
        },
        {
          title: 'Delivery Techniques',
          description: 'Master the art of confident and engaging presentation delivery.',
          videoUrl: '#',
          resources: [
            { title: 'Vocal Techniques Guide', link: '#' },
            { title: 'Body Language Tips', link: '#' },
          ],
        },
        {
          title: 'Visual Aids and Slide Design',
          description: 'Create compelling visual aids that enhance your message.',
          videoUrl: '#',
          resources: [
            { title: 'Slide Design Best Practices', link: '#' },
            { title: 'Visual Aids Checklist', link: '#' },
          ],
        },
      ],
    },
    {
      id: 'module4',
      title: 'Difficult Conversations',
      description: 'Navigate challenging interactions with confidence and professionalism.',
      duration: '60 minutes',
      lessons: [
        {
          title: 'Preparing for Difficult Conversations',
          description: 'Learn strategies to plan and approach challenging discussions.',
          videoUrl: '#',
          resources: [
            { title: 'Conversation Planning Template', link: '#' },
            { title: 'Mindset Preparation Guide', link: '#' },
          ],
        },
        {
          title: 'Managing Emotions',
          description: 'Techniques for staying calm and focused during tense interactions.',
          videoUrl: '#',
          resources: [
            { title: 'Emotional Regulation Strategies', link: '#' },
            { title: 'Self-Assessment Tool', link: '#' },
          ],
        },
      ],
    },
  ];

  const toggleModule = (moduleId: string) => {
    if (expandedModules.includes(moduleId)) {
      setExpandedModules(expandedModules.filter(id => id !== moduleId));
    } else {
      setExpandedModules([...expandedModules, moduleId]);
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Soft Skill Enhancement</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Develop essential interpersonal skills that employers value and that will help you succeed in any career
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Skill Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills Library</h2>
              
              <div className="space-y-2">
                {softSkills.map((skill) => {
                  const Icon = skill.icon;
                  
                  return (
                    <button
                      key={skill.id}
                      className={`w-full flex items-center text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedSkill === skill.id
                          ? 'bg-primary-100 text-primary-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedSkill(skill.id)}
                    >
                      <Icon className={`h-5 w-5 mr-3 ${
                        selectedSkill === skill.id ? 'text-primary-600' : 'text-gray-500'
                      }`} />
                      <div>
                        <h3 className="font-medium">{skill.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{skill.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Soft Skills Matter</h3>
            <p className="text-sm text-gray-700 mb-4">
              According to a LinkedIn survey, 92% of hiring managers say soft skills are equally or more important 
              than technical skills. Developing these skills can significantly enhance your career prospects.
            </p>
            <a
              href="#"
              className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
            >
              Learn more about soft skills
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Main Content - Skill Modules */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  {softSkills.find(s => s.id === selectedSkill)?.title} Skills
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                {softSkills.find(s => s.id === selectedSkill)?.description} This comprehensive 
                course will help you develop and enhance your {softSkills.find(s => s.id === selectedSkill)?.title.toLowerCase()} 
                skills through practical exercises and expert guidance.
              </p>
              
              <div className="space-y-6">
                {communicationModules.map((module) => {
                  const isExpanded = expandedModules.includes(module.id);
                  
                  return (
                    <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                        onClick={() => toggleModule(module.id)}
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{module.description}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-3">{module.duration}</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isExpanded ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {isExpanded ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <div className="space-y-4">
                            {module.lessons.map((lesson, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-4 rounded-lg shadow-sm"
                              >
                                <h4 className="text-md font-medium text-gray-800 mb-2">{lesson.title}</h4>
                                <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
                                
                                <div className="flex items-center mb-3">
                                  <a
                                    href={lesson.videoUrl}
                                    className="flex items-center text-primary-600 hover:text-primary-800 text-sm font-medium"
                                  >
                                    <Play className="h-4 w-4 mr-1" />
                                    Watch Video Lesson
                                  </a>
                                </div>
                                
                                {lesson.resources && lesson.resources.length > 0 && (
                                  <div>
                                    <h5 className="text-xs font-medium text-gray-700 mb-2">Resources:</h5>
                                    <ul className="space-y-1">
                                      {lesson.resources.map((resource, idx) => (
                                        <li key={idx} className="flex items-center">
                                          <CheckCircle className="h-3 w-3 text-primary-500 mr-2" />
                                          <a href={resource.link} className="text-xs text-primary-600 hover:text-primary-800">
                                            {resource.title}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Practice Exercises</h3>
              <p className="text-gray-600 mb-6">
                Reinforce your learning with these practical exercises designed to help you apply and master your 
                {softSkills.find(s => s.id === selectedSkill)?.title.toLowerCase()} skills in real-world scenarios.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Role-Playing Scenarios</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Practice handling different communication situations through guided role-playing exercises.
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    Start Exercise
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Feedback Analysis</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn to give and receive constructive feedback effectively in professional settings.
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    Start Exercise
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Communication Style Assessment</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Identify your natural communication style and learn how to adapt it for different situations.
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    Take Assessment
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Presentation Practice</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Record and analyze your presentation skills with guided feedback and improvement tips.
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    Start Exercise
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;