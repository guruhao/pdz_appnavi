import React from 'react';

interface TooltipProps {
  content: React.ReactNode;
}

export function Tooltip({ content }: TooltipProps) {
  return (
    <div className="absolute z-50 bottom-full left-0 mb-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg">
      <div className="relative">
        {content}
        <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-4" />
      </div>
    </div>
  );
}