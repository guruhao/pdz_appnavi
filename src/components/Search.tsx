import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <div className="relative max-w-md w-full mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="搜索功能..."
        className="w-full px-4 py-2 pl-10 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white shadow-sm"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-4 h-4" />
    </div>
  );
}