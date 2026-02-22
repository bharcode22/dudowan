import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'cursor-pointer';
  
  const variants = {
    primary: 'glass-btn-primary',
    secondary: 'glass-btn-secondary',
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;