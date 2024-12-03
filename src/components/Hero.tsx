import React from 'react';
import siteConfig from '../config/site.json';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">{siteConfig.title}</h2>
        <p className="text-lg text-primary-700 max-w-3xl mx-auto">
          {siteConfig.subtitle}
        </p>
      </div>
    </section>
  );
}