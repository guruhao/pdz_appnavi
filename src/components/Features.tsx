import React, { useState, useMemo } from 'react';
import FeatureCard from './FeatureCard';
import Search from './Search';
import siteConfig from '../config/site.json';
import { getGridClasses } from '../utils/gridUtils';

export default function Features() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeatures = useMemo(() => {
    return siteConfig.features.filter(feature => 
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Search value={searchQuery} onChange={setSearchQuery} />
        <div className={getGridClasses(filteredFeatures.length)}>
          {filteredFeatures.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  );
}