
import React from 'react';
import { cn } from "@/lib/utils";

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  timeline: string;
  delay?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  icon,
  title,
  description,
  timeline,
  delay = 0
}) => {
  return (
    <div 
      className="p-4 bg-dashboard-card hover:bg-dashboard-card-hover border border-gray-700 rounded-xl transition-all duration-300 hover:shadow-lg animate-slide-up hover:-translate-y-1"
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'both' 
      }}
    >
      <div className="flex items-center mb-2">
        <div className="bg-gray-800 bg-opacity-50 p-2.5 rounded-full mr-3 text-blue-400">
          {icon}
        </div>
        <h4 className="font-medium text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{description}</p>
      <div className="text-xs bg-gray-800 bg-opacity-50 p-2.5 rounded-lg">
        <span className="text-blue-400 font-medium">Timeline:</span> {timeline}
      </div>
    </div>
  );
};

export default PlanCard;
