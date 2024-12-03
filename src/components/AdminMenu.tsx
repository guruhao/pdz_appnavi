import React, { useState } from 'react';
import { Settings, Lock } from 'lucide-react';
import AdminLoginModal from './AdminLoginModal';

export default function AdminMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-primary-400 hover:text-primary-600 transition-colors flex items-center space-x-1 text-sm"
        aria-label="管理入口"
      >
        <Lock className="w-3 h-3" />
        <span className="opacity-50 hover:opacity-100">管理入口</span>
      </button>
      
      <AdminLoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}