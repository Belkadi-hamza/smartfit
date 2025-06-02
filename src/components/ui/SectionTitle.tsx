import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-sm font-bold text-blue-600 mb-2 tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold  ">
        {title}
        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-500 rounded"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;