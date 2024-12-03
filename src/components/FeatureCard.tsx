import React from 'react';
import { highlightText } from '../utils/highlightText';
import { TruncatedText } from './TruncatedText';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  searchQuery?: string;
}

export default function FeatureCard({ title, description, imageUrl, url, searchQuery = '' }: FeatureCardProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const maxDescriptionLength = window.innerWidth < 640 ? 60 : 100;
  const highlightedDescription = highlightText(description, searchQuery);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-primary-100 overflow-hidden transition-all hover:shadow-md hover:border-primary-200 h-full flex flex-col">
      <div className="relative group aspect-video">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-900">
          {highlightText(title, searchQuery)}
        </h3>
        <div className="text-sm sm:text-base text-primary-700 mb-4 flex-grow">
          <TruncatedText 
            text={highlightedDescription}
            maxLength={maxDescriptionLength}
          />
        </div>
        <button 
          onClick={handleClick}
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors mt-auto flex items-center justify-center space-x-2"
        >
          <span>立即体验</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}