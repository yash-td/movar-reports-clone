
import React from 'react';
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: 'fade' | 'slide' | 'none';
  delay?: number;
}

const DashboardCard = ({ 
  children, 
  className, 
  animate = 'slide', 
  delay = 0 
}: DashboardCardProps) => {
  const getAnimationClass = () => {
    switch (animate) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide':
        return 'animate-slide-up';
      default:
        return '';
    }
  };

  return (
    <div 
      className={cn(
        "dashboard-card glassmorphism rounded-xl p-4 hover-lift",
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
