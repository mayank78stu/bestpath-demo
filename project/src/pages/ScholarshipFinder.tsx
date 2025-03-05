import React, { useState } from 'react';
import { Search, Filter, Award } from 'lucide-react';
import ScholarshipCard from '../components/ScholarshipCard';

const ScholarshipFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    degreeLevel: 'all',
    amount: 'all',
    field: 'all',
  });

  // Mock scholarship data
  const scholarships = [
    {
      id: 1,
      title: 'Future Tech Leaders Scholarship',
      provider: 'TechFoundation',
      amount: '$5,000',
      deadline: 'December 15, 2025',
      eligibility: 'Computer Science, Engineering students',
      field: 'technology',
      degreeLevel: 'undergraduate',
      link: '#',
    },
    {
      id: 2,
      title: 'Global Business Excellence Award',
      provider: 'International Business Association',
      amount: '$7,500',
      deadline: 'January 30, 2026',
      eligibility: 'Business, Economics, Finance students',
      field: 'business',
      degreeLevel: 'graduate',
      link: '#',
    },
    {
      id: 3,
      title: 'Healthcare Innovation Scholarship',
      provider: 'MedTech Foundation',
      amount: '$10,000',
      deadline: 'November 1, 2025',
      eligibility: 'Medicine, Nursing, Biomedical Engineering',
      field: 'healthcare',
      degreeLevel: 'undergraduate',
      link: '#',
    },
    {
      id: 4,
      title: 'Creative Arts Grant',
      provider: 'National Arts Council',
      amount: '$3,000',
      deadline: 'March 15, 2026',
      eligibility: 'Fine Arts, Design, Music students',
      field: 'arts',
      degreeLevel: 'all',
      link: '#',
    },
    {
      id: 5,
      title: 'Environmental Leadership Scholarship',
      provider: 'Green Earth Foundation',
      amount: '$6,000',
      deadline: 'February 28, 2026',
      eligibility: 'Environmental Science, Sustainability students',
      field: 'environment',
      degreeLevel: 'graduate',
      link: '#',
    },
    {
      id: 6,
      title: 'Women in STEM Scholarship',
      provider: 'Women Engineers Association',
      amount: '$8,000',
      deadline: 'October 31, 2025',
      eligibility: 'Female students in STEM fields',
      field: 'technology',
      degreeLevel: 'undergraduate',
      link: '#',
    },
  ];

  // Filter scholarships based on search term and filters
  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDegreeLevel = filters.degreeLevel === 'all' || scholarship.degreeLevel === filters.degreeLevel;
    const matchesField = filters.field === 'all' || scholarship.field === filters.field;
    
    return matchesSearch && matchesDegreeLevel && matchesField;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Scholarship Finder</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover scholarships and financial aid opportunities tailored to your academic profile and career goals
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search scholarships by name, provider, or field of study..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <select
                name="degreeLevel"
                value={filters.degreeLevel}
                onChange={handleFilterChange}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Degree Levels</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>
            
            <div className="relative">
              <select
                name="field"
                value={filters.field}
                onChange={handleFilterChange}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Fields</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="healthcare">Healthcare</option>
                <option value="arts">Arts</option>
                <option value="environment">Environment</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {filteredScholarships.length} Scholarships Found
          </h2>
          <div className="flex items-center text-gray-600">
            <Filter className="h-5 w-5 mr-2" />
            <span>Sorted by: Deadline (Soonest)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                title={scholarship.title}
                provider={scholarship.provider}
                amount={scholarship.amount}
                deadline={scholarship.deadline}
                eligibility={scholarship.eligibility}
                link={scholarship.link}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No scholarships found</h3>
              <p className="text-gray-500">Try adjusting your search or filters to find more opportunities.</p>
            </div>
          )}
        </div>
      </div>

      {/* Scholarship Tips Section */}
      <div className="bg-primary-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Scholarship Application Tips</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-2">
              1
            </div>
            <p className="text-gray-700">Start early and create a calendar of application deadlines.</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-2">
              2
            </div>
            <p className="text-gray-700">Tailor your personal statement for each scholarship application.</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-2">
              3
            </div>
            <p className="text-gray-700">Request recommendation letters well in advance from professors or employers.</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-2">
              4
            </div>
            <p className="text-gray-700">Proofread all application materials carefully before submission.</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-2">
              5
            </div>
            <p className="text-gray-700">Apply for multiple scholarships to increase your chances of receiving funding.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScholarshipFinder;