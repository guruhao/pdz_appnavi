import React, { useState } from 'react';
import { Trash2, Upload, Link } from 'lucide-react';
import { Feature } from '../../types/admin';

interface FeatureFormProps {
  feature: Feature;
  index: number;
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof Feature, value: string) => void;
}

export default function FeatureForm({ feature, index, onRemove, onChange }: FeatureFormProps) {
  const [imageSource, setImageSource] = useState<'url' | 'upload' | 'local'>('url');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real application, this would upload to a server
      // For now, we'll create a local object URL
      const objectUrl = URL.createObjectURL(file);
      onChange(index, 'imageUrl', objectUrl);
    }
  };

  const handleLocalImageSelect = () => {
    // In a real application, this would show a modal with local image library
    alert('在实际应用中，这里会显示本地图片库供选择');
  };

  return (
    <div className="bg-primary-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-semibold text-primary-600">{index + 1}</span>
          <h4 className="text-lg font-medium text-primary-800">编辑功能</h4>
        </div>
        <button
          onClick={() => onRemove(index)}
          className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-full transition-colors"
          title="删除功能"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            标题
          </label>
          <input
            type="text"
            value={feature.title}
            onChange={(e) => onChange(index, 'title', e.target.value)}
            className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow"
            placeholder="输入功能标题..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            描述
          </label>
          <textarea
            value={feature.description}
            onChange={(e) => onChange(index, 'description', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow resize-none"
            placeholder="输入功能描述..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            链接地址
          </label>
          <input
            type="url"
            value={feature.url}
            onChange={(e) => onChange(index, 'url', e.target.value)}
            className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow"
            placeholder="https://..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            图片来源
          </label>
          <div className="flex space-x-2 mb-2">
            <button
              onClick={() => setImageSource('url')}
              className={`px-3 py-1.5 rounded-md flex items-center space-x-1 ${
                imageSource === 'url' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-primary-600 border border-primary-200'
              }`}
            >
              <Link className="w-4 h-4" />
              <span>图片链接</span>
            </button>
            <button
              onClick={() => setImageSource('upload')}
              className={`px-3 py-1.5 rounded-md flex items-center space-x-1 ${
                imageSource === 'upload'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-primary-600 border border-primary-200'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>上传图片</span>
            </button>
            <button
              onClick={() => {
                setImageSource('local');
                handleLocalImageSelect();
              }}
              className={`px-3 py-1.5 rounded-md flex items-center space-x-1 ${
                imageSource === 'local'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-primary-600 border border-primary-200'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>本地图库</span>
            </button>
          </div>

          {imageSource === 'url' && (
            <input
              type="url"
              value={feature.imageUrl}
              onChange={(e) => onChange(index, 'imageUrl', e.target.value)}
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow"
              placeholder="https://..."
            />
          )}

          {imageSource === 'upload' && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-shadow"
            />
          )}

          {feature.imageUrl && (
            <div className="mt-2 relative w-32 h-20 rounded-lg overflow-hidden border border-primary-200">
              <img
                src={feature.imageUrl}
                alt="预览"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/320x200?text=图片加载失败';
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}