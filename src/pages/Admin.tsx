import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import siteConfig from '../config/site.json';
import AdminHeader from '../components/admin/AdminHeader';
import SiteInfoForm from '../components/admin/SiteInfoForm';
import FeatureForm from '../components/admin/FeatureForm';
import FeatureTable from '../components/admin/FeatureTable';
import { Feature, SiteConfig } from '../types/admin';

export default function Admin() {
  const navigate = useNavigate();
  const [config, setConfig] = useState<SiteConfig>({
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    features: [...siteConfig.features]
  });
  const [originalConfig] = useState(config);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSiteInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index: number, field: keyof Feature, value: string) => {
    const newFeatures = [...config.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setConfig(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setConfig(prev => ({
      ...prev,
      features: [...prev.features, {
        title: '新功能',
        description: '功能描述',
        imageUrl: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07',
        url: 'https://example.com'
      }]
    }));
    setEditingIndex(config.features.length);
  };

  const removeFeature = (index: number) => {
    if (confirm('确定要删除这个功能吗？')) {
      setConfig(prev => ({
        ...prev,
        features: prev.features.filter((_, i) => i !== index)
      }));
      setEditingIndex(null);
    }
  };

  const handleSave = () => {
    console.log('Saving configuration:', config);
    alert('配置已保存！在实际应用中，这里会将数据保存到后端。');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <AdminHeader
          onSave={handleSave}
          onRevert={() => {
            setConfig(originalConfig);
            setEditingIndex(null);
          }}
          onCancel={() => navigate('/')}
        />

        <SiteInfoForm
          title={config.title}
          subtitle={config.subtitle}
          onChange={handleSiteInfoChange}
        />

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-primary-900">3. 功能卡片管理</h3>
            <button
              onClick={addFeature}
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              添加功能
            </button>
          </div>

          {editingIndex !== null ? (
            <div className="mb-4">
              <FeatureForm
                feature={config.features[editingIndex]}
                index={editingIndex}
                onRemove={() => {
                  removeFeature(editingIndex);
                }}
                onChange={handleFeatureChange}
              />
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setEditingIndex(null)}
                  className="px-4 py-2 text-primary-600 hover:text-primary-800"
                >
                  完成编辑
                </button>
              </div>
            </div>
          ) : (
            <FeatureTable
              features={config.features}
              onEdit={setEditingIndex}
              onRemove={removeFeature}
            />
          )}
        </div>
      </div>
    </div>
  );
}