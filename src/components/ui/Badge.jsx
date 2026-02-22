import React from 'react'

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white/10 text-white/80 border border-white/15',
    light: 'bg-white/5 text-white/70 border border-white/10',
    medium: 'bg-white/15 text-white border border-white/25',
    dark: 'bg-black/50 text-white/80 border border-white/10',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;