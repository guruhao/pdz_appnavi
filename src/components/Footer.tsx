import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminMenu from './AdminMenu';

export default function Footer() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <footer className="mt-auto py-6 bg-white border-t border-primary-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-primary-600">
            © {new Date().getFullYear()} AI 工具导航. All rights reserved.
          </p>
          {!isAdmin && <AdminMenu />}
        </div>
      </div>
    </footer>
  );
}