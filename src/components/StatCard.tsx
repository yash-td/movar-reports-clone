
import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import DashboardCard from './DashboardCard';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  subtext?: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  trend,
  subtext,
  delay = 0
}) => {
  return (
    <DashboardCard delay={delay}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
        </div>
        <div className={`${iconBgColor} p-2.5 rounded-full stat-icon`}>
          <div className={`${iconColor}`}>
            {icon}
          </div>
        </div>
      </div>
      {trend && (
        <div className="flex items-center mt-2">
          {trend.isPositive ? (
            <ArrowUpRight size={14} className="text-green-500 mr-1" />
          ) : (
            <ArrowDownRight size={14} className="text-red-500 mr-1" />
          )}
          <p className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.value}
          </p>
        </div>
      )}
      {subtext && (
        <div className="flex items-center mt-2">
          <p className="text-xs text-gray-400">{subtext}</p>
        </div>
      )}
    </DashboardCard>
  );
};

export default StatCard;
