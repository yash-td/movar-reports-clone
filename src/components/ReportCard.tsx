
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReportCardProps {
  title: string;
  description: string;
  imageSrc: string;
  route: string;
  lastUpdated: string;
  className?: string;
  delay?: number;
}

const ReportCard = ({
  title,
  description,
  imageSrc,
  route,
  lastUpdated,
  className,
  delay = 0
}: ReportCardProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Last updated: {lastUpdated}</span>
          <Link 
            to={route} 
            className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
          >
            View Report <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
