import React from 'react';

interface SiteInfoFormProps {
  title: string;
  subtitle: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function SiteInfoForm({ title, subtitle, onChange }: SiteInfoFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <label className="block text-sm font-medium text-primary-700 mb-1">
          1. 网站标题
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-primary-700 mb-1">
          2. 网站副标题
        </label>
        <textarea
          name="subtitle"
          value={subtitle}
          onChange={onChange}
          rows={2}
          className="w-full px-3 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>
    </div>
  );
}