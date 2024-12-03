import React from 'react';
import { Save, RotateCcw, X } from 'lucide-react';

interface AdminHeaderProps {
  onSave: () => void;
  onRevert: () => void;
  onCancel: () => void;
}

export default function AdminHeader({ onSave, onRevert, onCancel }: AdminHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-primary-900">网站管理</h2>
      <div className="flex space-x-2">
        <button
          onClick={onRevert}
          className="flex items-center px-4 py-2 border border-primary-200 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
          title="还原更改"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          还原
        </button>
        <button
          onClick={onCancel}
          className="flex items-center px-4 py-2 border border-primary-200 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
          title="取消并返回"
        >
          <X className="w-4 h-4 mr-2" />
          取消
        </button>
        <button
          onClick={onSave}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          保存
        </button>
      </div>
    </div>
  );
}