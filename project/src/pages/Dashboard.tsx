import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Award, 
  Compass, 
  Map, 
  BookOpen, 
  User, 
  Settings, 
  LogOut, 
  ChevronRight,
  CheckCircle,
  Clock,
  Calendar,
  BookMarked
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    interests: ['Data Science', 'UX Design', 'Project Management'],
    skills: [
      { name: 'Communication', progress: 85 },
      { name: 'Leadership', progress: 70 },
      { name: 'Problem Solving', progress: 90 },
      { name: 'Teamwork', progress: 80 },
    ],
    careerMatches: [
      { title: 'Data Scientist', match: 92 },
      { title: 'UX Designer', match: 85 },
      { title: 'Product Manager', match: 78 },
    ],
    scholarships: [
      { title: 'Tech Innovation Scholarship', status: 'Applied', deadline: 'Oct 15, 2025' },
      { title: 'Future Leaders Grant', status: 'Saved', deadline: 'Dec 1, 2025' },
    ],
    courses: [
      { title: 'Data Analysis Fundamentals', progress: 75, provider: 'DataCamp' },
      { title: 'UX Research Methods', progress: 40, provider: 'Interaction Design Foundation' },
      { title: 'Communication Skills', progress: 90, provider: 'bestPATH' },
    ],
    roadmapProgress: 65,
  };

  // Progress bar component
  const ProgressBar = ({ progress, color = 'primary' }: { progress: number, color?: string }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-${color}-600 h-2.5 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
                  <p className="text-sm text-gray-500">{userData.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <span>Overview</span>
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'career'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('career')}
                >
                  <Compass className="h-5 w-5 mr-3" />
                  <span>Career Matches</span>
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'roadmap'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('roadmap')}
                >
                  <Map className="h-5 w-5 mr-3" />
                  <span>My Roadmap</span>
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'scholarships'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('scholarships')}
                >
                  <Award className="h-5 w-5 mr-3" />
                  <span>Scholarships</span>
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('skills')}
                >
                  <BookOpen className="h-5 w-5 mr-3" />
                  <span>Skills & Courses</span>
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span>Profile</span>
                </button>
                
                <button
                  className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </button>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Compass className="h-6 w-6 text-primary-600 mr-2" />
                        <h3 className="text-lg font-medium text-gray-800">Top Career Match</h3>
                      </div>
                      <p className="text-2xl font-bold text-primary-700 mb-1">{userData.careerMatches[0].title}</p>
                      <p className="text-sm text-gray-600">{userData.careerMatches[0].match}% Match</p>
                    </div>
                    
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Map className="h-6 w-6 text-primary-600 mr-2" />
                        <h3 className="text-lg font-medium text-gray-800">Roadmap Progress</h3>
                      </div>
                      <p className="text-2xl font-bold text-primary-700 mb-1">{userData.roadmapProgress}%</p>
                      <p className="text-sm text-gray-600">Data Scientist Path</p>
                    </div>
                    
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Award className="h-6 w-6 text-primary-600 mr-2" />
                        <h3 className="text-lg font-medium text-gray-800">Scholarships</h3>
                      </div>
                      <p className="text-2xl font-bold text-primary-700 mb-1">{userData.scholarships.length}</p>
                      <p className="text-sm text-gray-600">Tracked Opportunities</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Your Interests</h3>
                      <div className="space-y-2">
                        {userData.interests.map((interest, index) => (
                          <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                            <span className="text-gray-800">{interest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Skill Development</h3>
                      <div className="space-y-4">
                        {userData.skills.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                              <span className="text-sm font-medium text-primary-600">{skill.progress}%</span>
                            </div>
                            <ProgressBar progress={skill.progress} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Course Progress</h3>
                  <div className="space-y-4">
                    {userData.courses.map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-800">{course.title}</h4>
                            <p className="text-sm text-gray-500">{course.provider}</p>
                          </div>
                          <span className="text-sm font-medium text-primary-600">{course.progress}%</span>
                        </div>
                        <ProgressBar progress={course.progress} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Upcoming Deadlines</h3>
                  <div className="space-y-3">
                    {userData.scholarships.map((scholarship, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                          <div>
                            <h4 className="font-medium text-gray-800">{scholarship.title}</h4>
                            <p className="text-xs text-gray-500">Deadline: {scholarship.deadline}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          scholarship.status === 'Applied' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {scholarship.status}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">Complete UX Research Course</h4>
                          <p className="text-xs text-gray-500">Due: Nov 10, 2025</p>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Career Matches Tab */}
          {activeTab === 'career' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Career Matches</h2>
                
                <div className="space-y-6">
                  {userData.careerMatches.map((career, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{career.title}</h3>
                        <div className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                          {career.match}% Match
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-primary-600 h-2.5 rounded-full"
                            style={{ width: `${career.match}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Average Salary</p>
                          <p className="text-lg font-semibold text-gray-900">$95,000 - $120,000</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Job Growth</p>
                          <p className="text-lg font-semibold text-gray-900">22% (Much faster than average)</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Education Required</p>
                          <p className="text-lg font-semibold text-gray-900">Bachelor's or Master's</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`/roadmap?career=${career.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex-1 py-2 px-4 bg-primary-600 rounded-lg text-white font-medium hover:bg-primary-700 transition-colors text-center"
                        >
                          View Career Roadmap
                        </a>
                        <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                          Explore Similar Careers
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Want to explore more career options?</h3>
                  <p className="text-gray-600 mb-4">
                    Take our comprehensive career assessment to discover additional career paths that match your skills and interests.
                  </p>
                  <a
                    href="/career-test"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Retake Career Assessment
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Other tabs would be implemented similarly */}
          {(activeTab !== 'overview' && activeTab !== 'career') && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h2>
              <p className="text-gray-600">
                This section is under development. Check back soon for updates!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;