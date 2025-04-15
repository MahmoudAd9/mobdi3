import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16'
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div 
        className={`animate-spin rounded-full border-b-2 border-gray-900 ${sizeClasses[size]}`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loading; 