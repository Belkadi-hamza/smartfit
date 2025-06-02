import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };
  
  const sizeClasses = {
    small: 'py-1.5 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {label}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  
  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;