import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  className = '',
  align = 'left',
}) => {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '800px' : undefined,
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      <div className="section-label">
        <span>{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
