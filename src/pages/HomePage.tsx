
import React from 'react';
import { Building, BarChart3, PieChart, LineChart, Info } from 'lucide-react';
import ReportCard from '@/components/ReportCard';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg-dark text-white overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Logo */}
        <header className="mb-12 animate-fade-in relative">
          <div className="absolute top-0 right-0">
            <img 
              src="/lovable-uploads/5d0a6ccd-eb16-4121-aef0-d583fe0bd181.png" 
              alt="Movar Reports Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight pr-16">
            Movar Reports
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">
            Data-driven insights from open-source information on major projects and investments.
          </p>
        </header>

        {/* About Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="glassmorphism rounded-xl p-6 border border-gray-800">
            <div className="flex items-start gap-4">
              <div className="bg-blue-900 bg-opacity-50 p-3 rounded-full mt-1">
                <Info size={24} className="text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">About Movar Reports</h2>
                <p className="text-gray-300 mb-4">
                  Movar Reports provides free insights derived from open-source data on major projects, infrastructure investments, and strategic initiatives. Our interactive dashboards help decision-makers, analysts, and the public understand complex datasets through intuitive visualizations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                    <BarChart3 size={20} className="text-blue-400" />
                    <span>Data-driven analysis</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                    <PieChart size={20} className="text-green-400" />
                    <span>Interactive visualizations</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                    <LineChart size={20} className="text-purple-400" />
                    <span>Trend identification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Gallery */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Building size={24} className="text-blue-400" />
            Available Reports
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReportCard 
              title="UK Infrastructure & Major Projects Dashboard"
              description="Analytics and insights from the Government Major Projects Portfolio and infrastructure investment pipeline, including departmental breakdowns and investment trajectories."
              imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              route="/uk-infrastructure-dashboard"
              lastUpdated="March 2025"
              delay={300}
            />
            
            {/* Placeholder for future reports - currently hidden */}
            {/* Additional report cards will go here as they are created */}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs mt-16 pb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p>All data is sourced from publicly available information and government publications.</p>
          <p className="mt-2">© 2025 Movar Reports. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
