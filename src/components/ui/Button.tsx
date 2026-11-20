import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    border: '1px solid transparent',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: '0.45rem 1rem',
      fontSize: 'var(--text-xs)',
    },
    md: {
      padding: '0.75rem 1.6rem',
      fontSize: 'var(--text-sm)',
    },
    lg: {
      padding: '0.95rem 2.2rem',
      fontSize: 'var(--text-base)',
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-surface)',
      borderColor: 'var(--color-text-primary)',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border)',
      boxShadow: 'var(--shadow-sm)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-strong)',
    },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      className={`btn focus-ring ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
