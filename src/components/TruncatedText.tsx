import React, { useState } from 'react';
import { Tooltip } from './Tooltip';

interface TruncatedTextProps {
  text: string | React.ReactNode;
  maxLength: number;
  className?: string;
}

export function TruncatedText({ text, maxLength, className = '' }: TruncatedTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const stringText = typeof text === 'string' ? text : '';
  const shouldTruncate = stringText.length > maxLength;
  
  if (!shouldTruncate || typeof text !== 'string') {
    return <span className={className}>{text}</span>;
  }

  const truncatedText = `${stringText.slice(0, maxLength)}...`;

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={className}>{truncatedText}</span>
      {isHovered && (
        <Tooltip content={text} />
      )}
    </div>
  );
}