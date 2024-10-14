// components/Drawer.tsx
import { useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-gray-900 bg-opacity-75`}
      onClick={onClose}
    >
      <div
        className="w-64 bg-white h-full shadow-xl p-4"
        onClick={(e) => e.stopPropagation()} // Drawer'ın içindeyken kapanmaması için
      >
        <button
          className="text-black mb-4"
          onClick={onClose}
        >
          Kapat
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
